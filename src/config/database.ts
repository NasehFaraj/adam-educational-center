import dotenv from 'dotenv';
import mongoose from 'mongoose';

dotenv.config();

const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://mongo:27017/adam-educational-center';

export const connectDB = async (): Promise<void> => {
    try {

        await mongoose.connect(MONGODB_URI);

    } catch (error) {
        throw error ; 
    }
};