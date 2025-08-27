import { Schema , model , HydratedDocument , Types } from "mongoose" ;


interface IActivity {

    _id: Types.ObjectId ;
    title: string ;
    description: string ;
    photoID: string ;
    date: string ;

}

type ActivityDocument = HydratedDocument<IActivity>;

const activitySchema = new Schema<ActivityDocument>({

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
    }


}, { timestamps : true }) ;


export const Activity = model<ActivityDocument>("Activity" , activitySchema) ;