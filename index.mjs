// index.mjs
//imports
import express from "express";
import bodyparser from "body-parser";
import dotenv from "dotenv";
import connectDB from "./db/conn.mjs";




//setups
dotenv.config();
const app = express();
let PORT = process.env.PORT || 3000;

//DB Connection
connectionDB();


//Listener
app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});
