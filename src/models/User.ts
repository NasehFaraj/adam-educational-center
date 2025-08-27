import { Schema , model , HydratedDocument , Types } from "mongoose" ;
import { Role } from "../enums/Role" ;
import { Gender } from "../enums/Gender" ;

interface iUser {

    _id: Types.ObjectId ;
    name: string ;
    motherName: string ;
    phone: string ;
    photoID: string ;
    grade: string ;
    role: Role ;
    gender: Gender ;

}

type UserDocument = HydratedDocument<iUser>;

const userSchema = new Schema<UserDocument>({
    name: {
        type: String ,
        required: true
    } ,
    motherName: {
        type: String ,
        required: true
    } ,
    role: {
        type: String ,
        enum: Role ,
        default: Role.Student
    } ,
    phone: {
        type: String ,
        required: true
    } ,
    photoID: {
        type: String ,
        required: true
    } ,
    gender: {
        type: String ,
        enum: Gender ,
        required: true
    } ,
    grade: {
        type: String ,
        required: true
    }
}, { timestamps : true }) ;


export const User = model<UserDocument>("User" , userSchema) ;