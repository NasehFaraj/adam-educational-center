import { Schema , model , HydratedDocument , Types } from "mongoose" ;


interface iGallery {

    _id: Types.ObjectId ;
    userID: string ;
    photoID: string ;

}

type GalleryDocument = HydratedDocument<iGallery>;

const gallerySchema = new Schema<GalleryDocument>({

    userID: {
        type: String ,
        required: true 
    } , 
    photoID: {
        type: String ,
        required: true 
    }

}, { timestamps : true }) ;


export const Gallery = model<GalleryDocument>("Gallery" , gallerySchema) ;