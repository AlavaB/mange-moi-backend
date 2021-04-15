const express = require("express");
const mongoose = require("mongoose");

const recipeRoutes = require("./routes/recipe");

mongoose.connect("mongodb+srv://Alava:Alava285@cluster0.fy4qk.mongodb.net/Mange-moi?retryWrites=true&w=majority",
  { useNewUrlParser: true,
    useUnifiedTopology: true })
  .then(() => console.log('Connexion à MongoDB réussie !'))
  .catch(() => console.log('Connexion à MongoDB échouée !'));

const app = express();

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*"); 
  res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content, Accept, Content-Type, Authorization"); 
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, PATCH, OPTIONS"); 
  next();
});

app.use(express.json());

app.use("/api/recipes", recipeRoutes);


module.exports = app;