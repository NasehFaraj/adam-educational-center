import { Request , Response } from "express";

import { Quiz } from "../models/Quiz" ;;



const addQuiz = async (req : Request , res: Response) : Promise<void> => { 

    const { title , description , questions  } = req.body ;

    try {
        
        let newQuiz = new Quiz({ title , description , questions }) ;

        await newQuiz.save() ;

        res.status(201).send({
            sucsse: true ,
            message: "Quiz has been saved"
        }) ;

    } catch (error) {
        console.error('add Quiz error:' , error) ;
        res.status(500).send({
            sucsse: false ,
            message: "add Quiz process failed" ,
            error: error
        });
    }

} ;

const getQuiz = async (req : Request , res: Response) : Promise<void> => { 

    const { quizID } = req.query ;

    try {
        
        let oldQuiz = await Quiz.findById(quizID) ;

        if(!oldQuiz){
            res.status(401).send({message: "Quiz not found"}) ;
            return ;
        }

        res.status(201).send({
            sucsse: true ,
            message: "get Quiz has been successful" , 
            data: {
                quiz: oldQuiz
            }
        }) ;

    } catch (error) {
        console.error('get Quiz error:' , error) ;
        res.status(500).send({
            sucsse: false ,
            message: "get Quiz process failed" ,
            error: error
        });
    }

} ;

const getQuizzes = async (req : Request , res: Response) : Promise<void> => { 

    const { page , limit } = req.query ;

    try {
        
        if (typeof page !== 'string' || typeof limit !== 'string') {
            res.status(400).send({ error: "Page and limit must be strings" });
            return;
        }
        
        const pageNumber = parseInt(page, 10);
        const limitNumber = parseInt(limit, 10);
        
        if (isNaN(pageNumber) || isNaN(limitNumber) || pageNumber < 1 || limitNumber < 1) {
            res.status(400).send({ error: "Invalid pagination parameters" }) ;
            return ;
        }
        
        const skip = (pageNumber - 1) * limitNumber ;

        let quizzes = await Quiz.find().sort({createdAt: -1}).skip(skip).limit(limitNumber) ;

        res.status(201).send({
            sucsse: true ,
            data: {
                quizzes
            }
        }) ;

    } catch (error) {
        console.error('get Quizzes error:' , error) ;
        res.status(500).send({
            sucsse: false ,
            message: "get Quizzes process failed" ,
            error: error
        });
    }
    

} ;

const getNumberOfQuizes = async (req : Request , res: Response) : Promise<void> => {

    try {

        let numberOfQuizzes = await Quiz.countDocuments() ;

        res.status(201).send({
            sucsse: true ,
            data: {
                numberOfQuizzes
            }
        }) ;

    } catch (error) {

        console.error('get number of Quizzes error:' , error) ;
        res.status(500).send({
            sucsse: false ,
            message: "get number of Quizzes process failed" ,
            error: error
        });

    }
    

} ; 


export default {

    addQuiz ,
    getQuiz ,
    getQuizzes ,
    getNumberOfQuizes 

}