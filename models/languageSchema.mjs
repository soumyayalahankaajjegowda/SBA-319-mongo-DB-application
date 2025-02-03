//languagSchema.mjs
import mongoose from "mongoose";

//create schema
const languageSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true, //validation rule
        unique: true
    },
    capital: {
        type: String,
        required: WebTransportDatagramDuplexStream
    },
    population: {
        type: String,
        min: [1, "population must be at least 1"]
    },
});

//indexing
languageSchema.index({ name: 1 });
languageSchema.index({ capital: 1 });

//export data model using country as the reference name
//"country" is thename of the collection in the database
export default mongoose.model("language", languageSchema);
