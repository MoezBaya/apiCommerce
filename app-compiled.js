"use strict";

var express = require('express');
var mongoose = require("mongoose");
var categorieRouter = require("./routes/categorie-route");
var ScategorieRouter = require("./routes/scategorie-route");
var articleRouter = require("./routes/article-route");
var dotenv = require('dotenv');
dotenv.config();
var app = express();

//BodyParser Middleware
app.use(express.json());
mongoose.set("strictQuery", false);

// Connexion à la base données
mongoose.connect(process.env.DBCloud, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(function () {
  console.log("Connexion à la base de données réussie");
})["catch"](function (err) {
  console.log('Impossible de se connecter à la base de données', err);
  process.exit();
});
app.get("/", function (req, res) {
  res.send("bonjour");
});
app.get("/contact", function (req, res) {
  res.send("this is page contact");
});
app.use('/api/categories', categorieRouter);
app.use('/api/scategories', ScategorieRouter);
app.use('/api/articles', articleRouter);
app.listen(process.env.PORT, function () {
  console.log("Server is listening on port ".concat(process.env.PORT));
});
