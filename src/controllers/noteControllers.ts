import { Request , Response } from "express" ; 


import { Note } from "../models/Note";



let addNote = async (req: Request , res: Response) : Promise<void> => {

    let { title , description , userIDs } = req.body ;

    try {

        for(let i = 0 ; i < userIDs.length ; i ++) {

            let newNote = new Note({ title , description , userID: userIDs[i] }) ;

            await newNote.save() ;
        
        }

        res.status(200).send({
            sucsse: true ,
            massage: "note has been added" ,
            data: {
                
            }
        }) ;

    } catch (error) {
        console.error('add note error:', error) ;
        res.status(500).send({
            sucsse: false ,
            message: "add note process failed" ,
            error: error
        }) ;
    }
    
} ;

let getMyNotes = async (req: Request , res: Response) : Promise<void> => {

    let { userID } = req.payload ;

    try {
        
        let oldNote = await Note.find({userID}).sort({createdAt: -1}) ;

        res.status(200).send({
            sucsse: true ,
            message: "" ,
            data: {
                notes: oldNote 
            }
        })


    } catch (error) {
        console.error('get notes error:', error) ;
        res.status(500).send({
            sucsse: false ,
            message: "get notes process failed" ,
            error: error
        }) ;
    }


} ;


export default {
    addNote ,
    getMyNotes
}