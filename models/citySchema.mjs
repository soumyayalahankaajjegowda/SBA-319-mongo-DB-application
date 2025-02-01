//citySchema.mjs
//imports

import mongoose from "mongoose";    

const citySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true    
    },
    country: {
        //type: mongoose.Schema.Types.ObjectId,
        type: String,
        required: true
    },
    population: { type: String, min: [1, "population must be at least 1"] },
    region: { type: String}, 
});

//Indexing
citySchema.index({ name: 1 });
citySchema.index({ country: 1 });

export default mongoose.model("city", citySchema);
