const express = require("express")
const router = express.Router();
const Article = require ("../models/article");
const Scategorie = require("../models/scategorie");

router.get('/',async(req,res)=>{
    try{
        const art = await Article.find().populate("scategorieID").exec()
        res.status(200).json(art)
    }
    catch(error){
        res.status(404).json({message:error.message})
    }
})

router.post('/',async(req,res)=>{
    const {reference,designation,prix,marque,qtstock,imageart} = req.body
    const art  = new Article (req.body)
    try{
        await art.save()
        res.status(200).json(art)
    }
    catch(err){
        res.status(400).json({message:err.message})
    }
})

// chercher un article
router.get('/:articleId',async(req, res)=>{
    try {
        const art = await Article.findById(req.params.articleId);
        res.status(200).json(art);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
});

// modifier un article
router.put('/:articleId', async (req, res)=> {
    const { reference,designation,prix,marque,qtestock,imageart,scategorieID} = req.body;
        const id = req.params.articleId;
    try {
        const art1 = {
            reference:reference,
            designation:designation,
            prix:prix,
            marque:marque,
            qtestock:qtestock,
            imageart:imageart,
            scategorieID:scategorieID, 
            _id:id 
        };

        await Article.findByIdAndUpdate(id, art1);
        res.json(art1);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
});

// Supprimer un article
router.delete('/:articleId', async (req, res)=> {
    const id = req.params.articleId;
    await Article.findByIdAndDelete(id);
    res.json({ message: "article deleted successfully." });
});

module.exports = router;