const { Op } = require("sequelize");
const { Recipe, Diet } = require("../../../db");

const searchRecipeDB = async ({ id, name }) => {
	if (id) return await getRecipeDbById(id);
	return getRecipeDb(name);
};
module.exports = searchRecipeDB;

const getRecipeDbById = async (id) => {
	const recipe = await Recipe.findByPk(id, {
		include: [
			{
				model: Diet,
				attributes: ["id", "name"],
				through: { attributes: [] },
			},
		],
	});

	if (!recipe) {
		throw Error(`Recipe with id: ${id} not found.`);
	}

	return format(recipe);
};

const getRecipeDb = async (name) => {
	let whereCondition = {};
	if (name) {
		if (typeof name !== "string" || !name.trim())
			throw Error("The name must be a non-empty string");

		whereCondition = { title: { [Op.iLike]: `%${name}%` } };
	}

	const recipesDB = await Recipe.findAll({
		where: whereCondition,
		include: [
			{
				model: Diet,
				attributes: ["id", "name"],
				through: { attributes: [] },
			},
		],
	});

	const recipes = recipesDB.map(format);
	return recipes;
};

const format = (recipe) => {
	return {
		id: recipe.id,
		title: recipe.title,
		image: recipe.image,
		summary: recipe.summary,
		healthScore: recipe.healthScore,
		steps: recipe.steps,
		diets: recipe.Diets.map((diet) => diet.dataValues),
	};
};
