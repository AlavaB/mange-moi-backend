const express = require("express");

const router = express.Router();
const recipeController = require("../controllers/recipe");

router.post("/", recipeController.createRecipe);
router.put("/:id", recipeController.modifyRecipe);
router.delete("/:id", recipeController.deleteRecipe);
router.get("/:id", recipeController.getOneRecipe);
router.get("/", recipeController.getAllRecipes);


module.exports = router;
