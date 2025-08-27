import { Schema , model , HydratedDocument , Types } from "mongoose" ;


interface IHomework {

    _id: Types.ObjectId ;
    title: string ;
    description: string ;
    userID: string ;

}

type HomeworkDocument = HydratedDocument<IHomework>;

const homeworkSchema = new Schema<HomeworkDocument>({

    title: {
        type: String ,
        required: true 
    } , 
    description: {
        type: String ,
        required: true 
    } , 
    userID: {
        type: String ,
        required: true 
    } 
    

}, { timestamps : true }) ;


export const Homework = model<HomeworkDocument>("Homework" , homeworkSchema) ;