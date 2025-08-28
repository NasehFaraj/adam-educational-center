import { Schema , model , HydratedDocument , Types } from "mongoose" ;


interface IScore {

    _id: Types.ObjectId ;
    material: string ;
    score: string ;
    maxScore: string ;
    userID: string ;

}

type ScoreDocument = HydratedDocument<IScore>;

const scoreSchema = new Schema<ScoreDocument>({

    material: {
        type: String ,
        required: true 
    } , 
    score: {
        type: String ,
        required: true 
    } , 
    maxScore: {
        type: String ,
        required: true 
    } , 
    userID: {
        type: String ,
        required: true 
    } 

}, { timestamps : true }) ;


export const Score = model<ScoreDocument>("Score" , scoreSchema) ;