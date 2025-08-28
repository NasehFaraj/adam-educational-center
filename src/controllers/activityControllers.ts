import { Request , Response } from "express" ; 
import { Activity } from "../models/Activity";


let addActivity = async (req: Request , res: Response) : Promise<void> => { 

    let { title , description , photoID , date } = req.body ; 

    try {

        let newActivity = new Activity({title , description , photoID , date}) ;

        await newActivity.save() ;

        res.status(200).send({
            sucsse: true , 
            massage: "activity has been added" 
        }) ;

    } catch (error) {
        console.error('add activity error:', error) ;
        res.status(500).send({
            sucsse: false ,
            message: "add activity process failed" ,
            error: error
        }) ;
    }
    


} ;


let getActivities = async (req: Request , res: Response) : Promise<void> => { 

    let { limit } = req.query ;

    try {

        
        if (typeof limit !== 'string') {
            res.status(400).send({ error: "limit must be strings" }) ;
            return ;
        }
        
        const limitNumber = parseInt(limit , 10) ;
        
        if (isNaN(limitNumber) || limitNumber < 1) {
            res.status(400).send({ error: "Invalid pagination parameters" }) ;
            return ;
        }

        let oldActivities = await Activity.find().sort({createdAt: -1}).limit(limitNumber) ; 

        res.status(200).send({
            sucsse: true , 
            massage: "" ,
            ativities : oldActivities 
        }) ;

    } catch (error) {
        console.error('get activity error:', error) ;
        res.status(500).send({
            sucsse: false ,
            message: "get activity process failed" ,
            error: error
        }) ;
    }

} ;

export default {
    addActivity , 
    getActivities
}