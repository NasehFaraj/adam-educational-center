import { Request , Response } from "express" ; 
import jwt , { Algorithm , SignOptions , JwtPayload } from "jsonwebtoken" ;
import { StringValue } from "ms" ;

import { User } from "../models/User";



let login = async (req: Request , res: Response) : Promise<void> => {

    let { userID } = req.body ; 

    try {

        const oldUser = await User.findById(userID) ;
        
        if (!oldUser) {
            res.status(404).send({ message: "Email not registered" }) ;
            return ;
        }

        if(!process.env.EXPIRESIN){
            throw new Error(".env.EXPIRESIN is not configured") ;
        }

        if(!process.env.JWT_SECRET){
            throw new Error(".env.JWT_SECRET is not configured") ;
        }

        const signOptions: SignOptions = {
            expiresIn: (process.env.EXPIRESIN as number | StringValue) || '1h' ,
            algorithm: (process.env.ALGORITHM as Algorithm) || 'HS256'
        };

        const payload: JwtPayload = {
            userID: oldUser._id ,
            name: oldUser.name ,
            role: oldUser.role ,
            grade: oldUser.grade ,
            motherName: oldUser.motherName ,
            phoneNumber: oldUser.phoneNumber 
        } ;

        const token = jwt.sign(payload , process.env.JWT_SECRET , signOptions) ; 

        res.status(200).send({
            sucsse: true ,
            messege: "Login successful" ,
            data: {
                token: token
            }
        });

    } catch (error) {
        console.error('Login error:', error) ;
        res.status(500).send({
            sucsse: false ,
            messege: "Login process failed" ,
            error: error
        }) ;
    }
    


} ;


export default {
    login
}