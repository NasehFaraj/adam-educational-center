import { StringValue } from "ms" ; 
import { Algorithm } from "jsonwebtoken" ;

declare namespace NodeJS {
    export interface ProcessEnv {
        
        [key : string] : string | number | StringValue | undefined ;
        MONGODB_URI: string ;
        PORT : number ;
        JWT_SECRET : string ;
        ADMIN_PASSWORD : string ;
        ALGORITHM : Algorithm | undefined ;
        EXPIRESIN : number | StringValue | undefined ; 

    }

}

