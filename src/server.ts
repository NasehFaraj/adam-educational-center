import express , { json } from 'express' ;
import cors from 'cors' ;
import dotenv from 'dotenv' ;
import helmet from 'helmet' ;
import morgan from 'morgan' ;

import { connectDB } from './config/database' ;
import authRouters from './routers/authRouters' ;

const server = express() ;

server.use(cors()) ;
server.use(json()) ;
server.use(helmet()) ;
server.use(morgan('combined')) ;


server.use('/api/auth' , authRouters) ;

dotenv.config() ;

const port = process.env.PORT || 3000 ;


server.listen(port , async() => {

    try {
        
        await connectDB() ;

        console.log('✅ Database connected successfully') ;
        console.log('🚀 server is running...') ;

    } catch (error) {
        console.error('❌ Database connection error:' , error) ;
    }

}) ;



