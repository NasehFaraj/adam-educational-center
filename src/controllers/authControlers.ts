import { Request , Response } from "express" ; 
import jwt , { Algorithm , SignOptions , JwtPayload } from "jsonwebtoken" ;
import { compare } from "bcryptjs" ; 
import { StringValue } from "ms" ;

import { User } from "../models/User";
import { Role } from "../enums/Role";



let login = async (req: Request , res: Response) : Promise<void> => { 

    let { userID , password } = req.body ; 

    try {

        const oldUser = await User.findById(userID) ;
        
        if (!oldUser) {
            res.status(404).send({ 
                sucsse: false ,
                message: "Email not registered" 
            }) ;
            return ;
        }

        if(!process.env.ADMIN_PASSWORD){
            res.status(404).send({ 
                sucsse: false ,
                message: ".env.ADMIN_PASSWORD is not configured" 
            }) ;
            return ;
        }

        if(oldUser.role == Role.Admin && !compare(password , process.env.ADMIN_PASSWORD)){
            res.status(400).send({ 
                sucsse: false ,
                message: "Invalid password" 
            }) ;
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
            photoID: oldUser.photoID , 
            motherName: oldUser.motherName ,
            phoneNumber: oldUser.phone
        } ;

        const token = jwt.sign(payload , process.env.JWT_SECRET , signOptions) ; 

        res.status(200).send({
            sucsse: true ,
            message: "Login successful" ,
            data: {
                token: token
            }
        });

    } catch (error) {
        console.error('Login error:', error) ;
        res.status(500).send({
            sucsse: false ,
            message: "Login process failed" ,
            error: error
        }) ;
    }
    


} ;


export default {
    login
}