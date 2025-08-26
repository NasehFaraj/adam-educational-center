import { Request , Response } from "express" ; 

import { User } from "../models/User";



let addUser = async (req: Request , res: Response) : Promise<void> => {

    let { name , motherName , phone , photoID , grade } = req.body ;

    try {
        
        let numberOfUser = (await User.countDocuments()) + 1 ;

        const currentYear = new Date().getFullYear();
        let id = `${currentYear}${numberOfUser.toString().padStart(5 , '0')}` ; 
        
        let newUser = new User({id , name , motherName , phone , photoID , grade}) ;

        await newUser.save() ;

        res.status(200).send({
            sucsse: true ,
            massege: "user has been added"
        }) ;

    } catch (error) {
        console.error('Login error:', error) ;
        res.status(500).send({
            sucsse: false ,
            messege: "Login process failed" ,
            error: error
        }) ;
    }
    
} ;


export default {
    addUser
}