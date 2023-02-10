const mongoose =require("mongoose")

const categorieSchema = mongoose.Schema({
    nomcategorie:{ 
        type: String, 
        required: true,
        unique:true 
    },
    imagecategorie :{ 
        type: String, 
        required: true 
    }
})

let Categorie = mongoose.model('categorie',categorieSchema);
module.exports = Categorie 
