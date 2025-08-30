import { Schema , model , HydratedDocument , Types } from "mongoose";

export interface IQuiz {

    _id: Types.ObjectId ;
    title: string ;
    description: string ;
    questions: {
        text: string;
        options: string[];
        correctAnswer: number ;
    }[];
    
}

type quizDocument = HydratedDocument<IQuiz> ;

const quizSchema = new Schema<quizDocument>(
    {
        title: {
            type: String,
            required: true
        },
        description: {
            type: String ,
            default: "" ,
            required: true
        },
        questions: [{
            text: { type: String , required: true },
            options: { type: [String] , required: true },
            correctAnswer: { type: Number , required: true }
        }]
    },
    { timestamps: true }
);

export const Quiz = model<quizDocument>("Quiz" , quizSchema) ;