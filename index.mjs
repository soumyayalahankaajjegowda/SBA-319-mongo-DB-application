// index.mjs
//imports
import express from "express";
import mongoose from 'mongoose';
import bodyParser from "body-parser";
import dotenv from "dotenv";
import connectDB from "./db/conn.mjs";
import countryRoutes from "./routes/countryRoutes.mjs";
import { countries } from "./data/countries.mjs";
import Country from "./models/countrySchema.mjs";


//setups
dotenv.config();

const app = express();
let PORT = process.env.PORT || 3000;

//DB Connection
// mongoose
// .connect(process.env.MONGO_URI)
// .then(() => console.log('MongoDB connected'))
// .catch((error) => console.log('Error connecting to MongoDB:', error));
connectDB();

//middleware
app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json({extended: true}));

//routes
app.use("/", countryRoutes);

// app.get('/country', async (req, res) => {
//     const users = await Country.find()
//     console.log(country)
//     res.json(country)
//     });

//     app.get('/', (req, res) => {
//         res.send('hello (from server)') 
//     });

app.get("/seed", async (req, res) => {
    try{
    //optional step to delete what is currently in the database before creating items
    // this step avoids duplicates
    await country.deleteMany({});


//create items in Database
await Country.create(countries);
res.send("Seeding database");
} catch (error) {  
    res.status(500).json({ message: error.message });
}
});

//Listener
app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});
