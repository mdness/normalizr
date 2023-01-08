import mongoose from 'mongoose';
import conIndex from '../config/index.js';  

export const initDb = () => {
    return mongoose.connect(conIndex.MONGO_ATLAS_URL);
}