//conn.mjs
//imports
import mongoose from "mongoose";
import dotenv from "dotenv";

//configurations
dotenv.config();

//Database connection
const connectionString = process.env.mongo_URI;

export default async function connectDB() {
    try {
       // if (!connectionString) {
         //   throw new Error("MongoURI is missing");
        //}
        await mongoose.connect(connectionString);
        console.log(`mongoDB Connected...`);
        } catch (error) {
            console.error("Error connecting to MongoDB:",error);
         //   process.exit(1);
        }
}