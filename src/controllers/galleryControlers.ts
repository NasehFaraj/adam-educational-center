import { Request , Response } from "express" ; 


import { Gallery } from "../models/Gallery";



let addPhoto = async (req: Request , res: Response) : Promise<void> => {

    let { photoID , userID } = req.body ;

    try {

        let newPhoto = new Gallery({photoID , userID}) ;

        await newPhoto.save() ;

        res.status(200).send({
            sucsse: true ,
            massage: "user has been added" ,
            data: {
                
            }
        }) ;

    } catch (error) {
        console.error('add photo error:', error) ;
        res.status(500).send({
            sucsse: false ,
            message: "add photo process failed" ,
            error: error
        }) ;
    }
    
} ;

let getMyGallery = async (req: Request , res: Response) : Promise<void> => {

    let { userID } = req.payload ;

    try {
        
        let oldGallery = await Gallery.find({userID}) ;


        res.status(200).send({
            sucsse: true ,
            message: "" ,
            data: {
                gallery: oldGallery 
            }
        })


    } catch (error) {
        console.error('get gallery error:', error) ;
        res.status(500).send({
            sucsse: false ,
            message: "get gallery process failed" ,
            error: error
        }) ;
    }


} ;


export default {
    addPhoto ,
    getMyGallery
}