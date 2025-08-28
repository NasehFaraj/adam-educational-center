import { Request , Response } from "express" ; 


import { Homework } from "../models/Homework";



let addHomework = async (req: Request , res: Response) : Promise<void> => {

    let { title , description , userIDs } = req.body ;

    try {

        for(let i = 0 ; i < userIDs.length ; i ++) {

            let newPhoto = new Homework({ title , description , userId: userIDs[i] }) ;

            await newPhoto.save() ;
        
        }

        res.status(200).send({
            sucsse: true ,
            massage: "homework has been added" ,
            data: {
                
            }
        }) ;

    } catch (error) {
        console.error('add homework error:', error) ;
        res.status(500).send({
            sucsse: false ,
            message: "add homework process failed" ,
            error: error
        }) ;
    }
    
} ;

let getMyhomeworks = async (req: Request , res: Response) : Promise<void> => {

    let { userID } = req.payload ;

    try {
        
        let oldHomework = await Homework.find({userID}) ;

        res.status(200).send({
            sucsse: true ,
            message: "" ,
            data: {
                homeworks: oldHomework 
            }
        })


    } catch (error) {
        console.error('get homeworks error:', error) ;
        res.status(500).send({
            sucsse: false ,
            message: "get homeworks process failed" ,
            error: error
        }) ;
    }


} ;


export default {
    addHomework ,
    getMyhomeworks
}