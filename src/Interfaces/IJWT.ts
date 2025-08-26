import jwt from "jsonwebtoken" ;

declare module 'jsonwebtoken' {
    export interface dataJwtPayload extends jwt.JwtPayload {
        userID: string ,
        name: string ,
        role: string ,
        grade: string ,
        motherName: string ,
        phoneNumber: string 
    }
}