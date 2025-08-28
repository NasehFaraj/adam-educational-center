import { Schema , model , HydratedDocument , Types } from "mongoose" ;


interface INote {

    _id: Types.ObjectId ;
    title: string ;
    description: string ;
    photoID: string ;
    date: string ;
    userID: string ;

}

type NoteDocument = HydratedDocument<INote>;

const noteSchema = new Schema<NoteDocument>({

    title: {
        type: String ,
        required: true 
    } , 
    description: {
        type: String ,
        required: true 
    } , 
    photoID: {
        type: String ,
        required: true 
    } ,
    date: {
        type: String ,
        required: true 
    } ,
    userID: {
        type: String ,
        required: true 
    }


}, { timestamps : true }) ;


export const Note = model<NoteDocument>("Note" , noteSchema) ;