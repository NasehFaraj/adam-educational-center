import { Request , Response } from "express" ; 


import { Score } from "../models/Score";



let addScore = async (req: Request , res: Response) : Promise<void> => {

    let { title , description , userID } = req.body ;

    try {

        let newScore = new Score({ title , description , userID }) ;

        await newScore.save() ;
        
        res.status(200).send({
            sucsse: true ,
            massage: "score has been added" ,
            data: {
                
            }
        }) ;

    } catch (error) {
        console.error('add score error:', error) ;
        res.status(500).send({
            sucsse: false ,
            message: "add score process failed" ,
            error: error
        }) ;
    }
    
} ;

let getMyScores = async (req: Request , res: Response) : Promise<void> => {

    let { userID } = req.payload ;

    try {
        
        let oldScore = await Score.find({userID}) ;

        res.status(200).send({
            sucsse: true ,
            message: "" ,
            data: {
                scores: oldScore 
            }
        })


    } catch (error) {
        console.error('get scores error:', error) ;
        res.status(500).send({
            sucsse: false ,
            message: "get scores process failed" ,
            error: error
        }) ;
    }


} ;


export default {
    addScore ,
    getMyScores
}