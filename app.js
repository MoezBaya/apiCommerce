const express = require('express');
const mongoose = require("mongoose")
const categorieRouter = require("./routes/categorie-route")
const ScategorieRouter = require("./routes/scategorie-route");
const articleRouter = require("./routes/article-route");

const dotenv = require('dotenv')

dotenv.config()

const app = express();

//BodyParser Middleware
app.use(express.json());

mongoose.set("strictQuery", false);

// Connexion à la base données
mongoose.connect(process.env.DBCloud,{
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log("Connexion à la base de données réussie");
}).catch(err => {
    console.log('Impossible de se connecter à la base de données', err);
    process.exit();
});

app.get("/",(req,res)=>{
    res.send("bonjour");
});

app.get("/contact",(req,res)=>{
    res.send("this is page contact");
});


app.use('/api/categories', categorieRouter);
app.use('/api/scategories', ScategorieRouter);
app.use('/api/articles', articleRouter);

app.listen(process.env.PORT, () => {
    console.log(`Server is listening on port ${process.env.PORT}`); 
});