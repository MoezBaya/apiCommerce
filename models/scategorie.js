const mongoose =require("mongoose");
const Categorie =require("./categorie.js");

const scategorieSchema = mongoose.Schema({

    nomscategorie_1:{ 
        type: String, 
        required: false 
    },
    imagescat :{ 
        type: String, 
        required: false 
    },
    categorieID: {
        type:mongoose.Schema.Types.ObjectId,ref:Categorie
    }
})

let Scategorie = mongoose.model('Scategorie',scategorieSchema);
module.exports = Scategorie
