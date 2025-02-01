// index.mjs
//imports
import express from "express";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import connectDB from "./db/conn.mjs";
import countryRoutes from "./routes/countryRoutes.mjs";
import { countries } from "./data/countries.mjs";
import Country from "./models/countrySchema.mjs";


mongoose.connect(process.env.mongo_URI).then(() => console.log('mongoDB connected'))
//setups
dotenv.config();
const app = express();
const PORT = process.env.PORT || 3000;

//DB Connection
connectDB();

//middleware
app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json({extended: true}));

//routes
app.use("/", countryRoutes);

//send route
app.get("/seed", async (req, res) => {
    try{
    //optional step to delete what is currently in the database before creating items
    // this step avoids duplicates
    await countrySchema.deleteMany({});


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
