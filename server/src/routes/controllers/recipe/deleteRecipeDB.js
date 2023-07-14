const { Recipe } = require("../../../db");
const { Op } = require("sequelize");

// Función principal
const deleteRecipeDB = async (id) => {
	const recipe = await Recipe.destroy({ where: { id: { [Op.eq]: id } } });
	return recipe;
};

module.exports = deleteRecipeDB;
