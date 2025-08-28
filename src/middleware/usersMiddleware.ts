import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
import { Role } from '../common/Role';
import { payload } from '../common/IPayload';

dotenv.config();

export const usersMiddleware = (roles: Role[]) => {
    return async (req: Request, res: Response, next: NextFunction) => {
        try {
            const token = req.headers.token as string;
            const JWT_SECRET = process.env.JWT_SECRET;

            if (!JWT_SECRET) {
                return res.status(500).json({
                    success: false ,
                    message: 'Server configuration error'
                });
            }

            if (!token) {
                return res.status(403).json({
                    success: false,
                    message: 'Token needed'
                });
            }

            const decoded = jwt.verify(token, JWT_SECRET);

            if (typeof decoded === 'string' || !('role' in decoded)) {
                return res.status(403).json({
                    success: false,
                    message: 'Invalid token structure'
                });
            }

            const { role } = decoded;

            if (!roles.includes(role)) {
                return res.status(403).json({
                    success: false,
                    message: 'Unauthorized'
                });
            }

            req.payload = decoded as payload;
            next();

        } catch (error) {
            if (error instanceof jwt.TokenExpiredError) {
                return res.status(401).json({
                    success: false,
                    message: 'The token has expired'
                });
            }

            if (error instanceof jwt.JsonWebTokenError) {
                return res.status(401).json({
                    success: false,
                    message: 'Invalid token'
                });
            }

            console.error('Authentication error:', error);
            return res.status(500).json({
                success: false,
                message: 'Internal server error'
            });
        }
    };
};