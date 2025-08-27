import { Request , Response } from "express" ; 

import { User } from "../models/User";
import { Gender } from "../enums/Gender";



let addUser = async (req: Request , res: Response) : Promise<void> => {

    let { name , motherName , phone , photoID , grade , gender } = req.body ;

    try {

        let numberOfUser = (await User.countDocuments()) + 1 ;

        const currentYear = new Date().getFullYear();
        let id = `${currentYear}${numberOfUser.toString().padStart(5 , '0')}` ; 
        
        let newUser = new User({id , name , motherName , phone , photoID , grade , gender}) ;

        await newUser.save() ;

        res.status(200).send({
            sucsse: true ,
            massage: "user has been added" ,
            data: {
                id: id
            }
        }) ;

    } catch (error) {
        console.error('add user error:', error) ;
        res.status(500).send({
            sucsse: false ,
            message: "add user process failed" ,
            error: error
        }) ;
    }
    
} ;

let getUsers = async (req: Request , res: Response) : Promise<void> => {

    let { grade } = req.query ;

    try {
        
        let oldUsers = await User.find({grade}) ;


        res.status(200).send({
            sucsse: true ,
            message: "" ,
            data: {
                users: oldUsers 
            }
        })


    } catch (error) {
        console.error('get users error:', error) ;
        res.status(500).send({
            sucsse: false ,
            message: "get users process failed" ,
            error: error
        }) ;
    }


} ;


export default {
    addUser ,
    getUsers
}