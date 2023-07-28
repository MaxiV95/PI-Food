const callSpoonacularAPI = require("../callSpoonacularAPI");
const getAllDiets = require("../diet/getAllDiets");

// Función principal
const searchRecipeAPI = async ({ id, name }) => {
	const dietsDB = await getAllDiets();
	if (id) return await getRecipeApiById(id, dietsDB);
	return await getRecipesAPI(name, dietsDB);
};
module.exports = searchRecipeAPI;

// Búsqueda 100 primeras, if(name) filtrado por name en servidor
const getRecipesAPI = async (name, dietsDB) => {
	const data = await callSpoonacularAPI(
		`https://api.spoonacular.com/recipes/complexSearch?addRecipeInformation=true&number=100`
	);
	const recipesAPI = data.results?.map((recipe) =>
		formatRecipe(recipe, dietsDB)
	);

	if (!name) return recipesAPI;
	if (typeof name !== "string" || !name.trim())
		throw Error("The name must be a non-empty string");

	// Si name es una cadena de texto no vacía, filtra por name
	return recipesAPI.filter((recipe) =>
		recipe.title.toLowerCase().includes(name.toLowerCase())
	);
};

// Búsqueda por ID
const getRecipeApiById = async (id, dietsDB) => {
	const data = await callSpoonacularAPI(
		`https://api.spoonacular.com/recipes/${id}/information`
	);
	if (!data.title) throw Error(`ID: ${id} Not found`);

	return formatRecipe(data, dietsDB);
};

// Formateo de la respuesta de la API
const formatRecipe = (recipe, dietsDB) => {
	const matchingDiets = dietsDB.filter((db) =>
		recipe.diets.some((diet) => diet.toLowerCase() === db.name.toLowerCase())
	);
	const diets = matchingDiets.map((db) => ({ id: db.id, name: db.name }));

	return {
		id: recipe.id,
		title: recipe.title,
		image: recipe.image,
		summary: recipe.summary.replace(/(<([^>]+)>)/gi, ""),
		healthScore: recipe.healthScore,
		steps: recipe.analyzedInstructions[0]?.steps.map((step) => step.step),
		diets: diets,
	};
};
