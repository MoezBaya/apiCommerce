const mongoose =require("mongoose");
const Scategorie =require("./scategorie.js");

const articleSchema = mongoose.Schema({
    reference:{ 
        type: String, 
        required: false,
        value: Number,
        reason: String,
        unique:true 
    },
    designation:{ 
        type: String, 
        required: false,
        value: Number,
        reason: String,
        unique:true 
    },
    prix:{ 
        type: Number, 
        required: false 
    },
    marque:{ 
        type: String, 
        required: false 
    },
    qtestock:{ 
        type: Number, 
        required: false 
    },
    imageart:{
        type: String, 
        required: false 
    },
    scategorieID: {
        type:mongoose.Schema.Types.ObjectId,ref:Scategorie
    }
});

let Article = mongoose.model('article',articleSchema);
module.exports = Article