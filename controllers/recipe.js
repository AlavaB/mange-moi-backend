const Recipe = require("../models/Recipe");

exports.createRecipe = (req, res, next) => {
  const recipe = new Recipe({
    name: req.body.name,
    ingredients: req.body.ingredients,
    description: req.body.description,
  });
  recipe
    .save()
    .then(() => {
      res.status(201).json({ message: "Recette enregistrée avec succès" });
    })
    .catch((error) => {
      res.status(400).json({ error: error });
    });
};

exports.modifyRecipe = (req, res, next) => {
  Recipe.updateOne({ _id: req.params.id }, { ...req.body, _id: req.params.id })
    .then(() => res.status(200).json({ message: "Recette modifiée !" }))
    .catch(error => res.status(400).json({ error: error }));
}

exports.deleteRecipe = (req, res, next) => {
  Recipe.deleteOne({ _id: req.params.id })
    .then(() => res.status(200).json({ message: "Recette supprimée !" }))
    .catch(error => res.status(400).json({ error: error }));
};

exports.getOneRecipe = (req, res, next) => {
  Recipe.findOne({ _id: req.params.id })
    .then(recipe => res.status(200).json(recipe))
    .catch(error => res.status(400).json({ error }));
};

exports.getAllRecipes = (req, res, next) => {
  Recipe.find()
    .then(recipes => res.status(200).json(recipes))
    .catch(error => res.status(400).json({ error }));
};