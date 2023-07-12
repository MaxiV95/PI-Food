const { Recipe } = require("../../../db");

// Función principal
const deleteRecipeDB = async (id) => {
	const recipe = await Recipe.destroy({ where: { id: id } });
	return recipe;
};

module.exports = deleteRecipeDB;
