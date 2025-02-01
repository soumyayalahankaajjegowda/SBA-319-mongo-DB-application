//countrySchema.mjs
// imports
import mongoose from "mongoose";

//create schema
const countrySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    capital: {
        type: String,
        required: true
    },
    population: {
        type: String,
        min: [1, "population must be at least 1"]
    },
});

//indexing
countrySchema.index({ name: 1 });
countrySchema.index({ capital: 1 });

//export data model using country as the reference name
//"country" is thename of the collection in the database
export default mongoose.model("country", countrySchema);