const express = require("express");
const router = express.Router();
const Scategorie = require ('../models/scategorie')

router.get('/',async(req,res)=>{
    try{
        const cat =await Scategorie.find().populate("categorieID").exec()
        res.status(200).json(cat)
    }
    catch(error){
        res.status(404).json({message:error.message})
    }

})

router.post('/',async(req,res)=>{
    const{nomscategorie_1, imagescat} = req.body
    //const cat1 = new Categorie({nomcategorie :nomcategorie, imagecategorie: imagecategorie})
    const cat1 = new Scategorie (req.body) 
    try{
        await cat1.save()
        res.status(200).json(cat1)
    } 
    catch(error){
        res.status(404).json({message:error.message})

    }
})

router.put('/:scategorieId', async (req, res)=> {
    const { nomscategorie_1, imagescat} = req.body;
    const id = req.params.scategorieId;
    try {
    const cat1 = {
        nomscategorie_1: nomscategorie_1 ,
        imagescat:imagescat,
        _id:id };
        console.log(cat1)
    await Scategorie.findByIdAndUpdate(id, cat1);
    res.json(cat1);
    } catch (error) {
    res.status(404).json({ message: error.message });
    }
});
        
router.delete('/:scategorieId', async (req, res)=> {
        const id = req.params.scategorieId;
        await Scategorie.findByIdAndDelete(id);
        res.json({ message: "categorie deleted successfully." });
});

router.get('/:scategorieId',async(req, res)=>{
    const id = req.params.scategorieId
    try {
        const cat = await Scategorie.findById(id);
        res.status(200).json(cat);
    } 
    catch (error) {
        res.status(404).json({ message: error.message });
    }
});

module.exports = router;