// const { Diet } = require("../../../db");
const callSpoonacularAPI = require("../callSpoonacularAPI");

const dataDiet = [];

// Función principal
const getAllDiets = async () => {
	// let allDietsDB = await Diet.findAll();
	// if (!allDietsDB.length) allDietsDB = await getAllDietsAPI();
	// return allDietsDB;
	return await getAllDietsAPI();
};
module.exports = getAllDiets;

const getAllDietsAPI = async () => {
	if (dataDiet.length > 0) return dataDiet;

	// Carga de dietas solo si la base de datos esta vacía
	const data = await callSpoonacularAPI(
		`https://api.spoonacular.com/recipes/complexSearch?addRecipeInformation=true&number=100`
	);
	if (!data.results) throw new Error("No API results found.");
	console.log("API request executed.");

	const dietsAPI = data.results.map((recipe) => recipe.diets).flat(9); // Array sin profundidad
	let dietArray = [...new Set(dietsAPI)]; // Array sin repeticiones
	dietArray.sort((a, b) => a.localeCompare(b)); // Ordenado alfabéticamente
	dietArray = dietArray.map(
		(diet) => diet.charAt(0).toUpperCase() + diet.slice(1)
	); // Primera letra en mayúscula

	// await Promise.all(
	// 	dietArray.map(async (diet) => {
	// 		await Diet.findOrCreate({ where: { name: diet } });
	// 	})
	// );

	// const allDiets = await Diet.findAll();
	// return allDiets;

	dietArray.forEach((diet, index) => dataDiet.push({ id: index, name: diet }));
	return dataDiet;
};
