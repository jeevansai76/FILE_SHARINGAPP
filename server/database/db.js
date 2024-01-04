import mongoose from "mongoose";
import dotenv from 'dotenv';

dotenv.config();

const DBConnection = async () => {
    const USERNAME = process.env.DB_USERNAME;
    const PASSWORD = process.env.DB_PASSWORD;
    const MONGO_URI=`mongodb://${USERNAME}:${PASSWORD}@ac-3tiwc4g-shard-00-00.6uperne.mongodb.net:27017,ac-3tiwc4g-shard-00-01.6uperne.mongodb.net:27017,ac-3tiwc4g-shard-00-02.6uperne.mongodb.net:27017/?ssl=true&replicaSet=atlas-vo08yf-shard-0&authSource=admin&retryWrites=true&w=majority`;
    //const MONGO_URI =`mongodb://${USERNAME}:${PASSWORD}@ac-3tiwc4g-shard-00-00.6uperne.mongodb.net:27017,ac-3tiwc4g-shard-00-01.6uperne.mongodb.net:27017,ac-3tiwc4g-shard-00-02.6uperne.mongodb.net:27017/?ssl=true&replicaSet=atlas-vo08yf-shard-0&authSource=admin&retryWrites=true&w=majority`;
    
    try { 
        
        await mongoose.connect(MONGO_URI, { useNewUrlParser: true });
        console.log('Database connected successfully');
    } catch (error) {
        console.log('Error while connecting with the database ', error.message);
    }
}

export default DBConnection;