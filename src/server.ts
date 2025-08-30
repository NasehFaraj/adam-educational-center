import express , { json } from 'express' ;
import cors from 'cors' ;
import dotenv from 'dotenv' ;
import helmet from 'helmet' ;
import morgan from 'morgan' ;

import { connectDB } from './config/database' ;
import authRouters from './routers/authRouters' ;
import userRouters from './routers/userRouters' ;
import fileRouters from './routers/fileRouters' ;
import noteRouters from './routers/noteRouters' ;
import quizRouters from './routers/quizRouters' ;
import scoreRouters from './routers/scoreRouters' ;
import galleryRouters from './routers/galleryRouters' ;
import activityRouters from './routers/activityRouters' ;
import homeworkRouters from './routers/homeworkRouters' ;

const server = express() ;

server.use(cors()) ;
server.use(json()) ;
server.use(helmet()) ;
server.use(morgan('combined')) ;


server.use('/api/auth' , authRouters) ;
server.use('/api/user' , userRouters) ;
server.use('/api/file' , fileRouters) ;
server.use('/api/note' , noteRouters) ;
server.use('/api/score' , scoreRouters) ;
server.use('/api/quiz' , quizRouters) ;
server.use('/api/gallery' , galleryRouters) ;
server.use('/api/activity' , activityRouters) ;
server.use('/api/homework' , homeworkRouters) ;

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



