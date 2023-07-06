import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
	dietsAll: [], // todas
	recipesAll: [], // todas (primeras 100)
	recipesShown: [], // recetas mostradas
	recipesByName: [], // buscadas por nombre

	selected: {
		byDiet: "",
		byCreated: "",
		byOrder: "",
	},

	page: 1,
};

export const recipeStore = createSlice({
	name: "recipeStore",
	initialState,
	reducers: {
		setDiets: (state, { payload }) => {
			state.dietsAll = payload;
		},
		setRecipesAll: (state, { payload }) => {
			state.recipesAll = payload;
			state.recipesShown = payload;
			state.recipesByName = [];
			state.selected = {
				byDiet: "",
				byCreated: "",
				byOrder: "",
			};
			state.page = 1;
		},
		setRecipesByName: (state, { payload }) => {
			state.recipesShown = payload;
			state.recipesByName = payload;
			state.page = 1;
		},
		setSelected: (state, { payload }) => {
			state = { ...state, ...payload };
		},
		setPage: (state, { payload }) => {
			state.dietsAll = payload;
		},
	},
});
export const {
	setDiets,
	setRecipesAll,
	setRecipesByName,
	setSelected,
	setPage,
} = recipeStore.actions;
export default recipeStore.reducer;

// Trae y guarda las dietas en dietsAll si esta vacío
export const getAllDiets = () => {
	return async (dispatch, getState) => {
		const { dietsAll } = getState().recipeStore;

		if (dietsAll.length > 0) return;

		try {
			const response = await axios.get("/diets");
			const allDiets = response.data;
			allDiets.sort((a, b) => a.name.localeCompare(b.name));
			return dispatch(setDiets(allDiets));
		} catch (error) {
			console.error(error);
		}
	};
};

// Trae y guarda las recetas en recipesAll y recipesShown
// Si ya existen en recipesAll no vuelve a llamar al back
export const getAllRecipes = () => {
	return async (dispatch, getState) => {
		const { recipesAll } = getState().recipeStore;

		if (recipesAll.length > 0) return dispatch(setDiets(recipesAll));

		try {
			const response = await axios.get("/recipes");
			const allRecipes = response.data;
			return dispatch(setRecipesAll(allRecipes));
		} catch (error) {
			console.error(error);
		}
	};
};

// Trae y guarda recetas por name en allRecipes
export const getRecipeByName = (name) => {
	return async (dispatch) => {
		try {
			const response = await axios.get(`/recipes?name=${name}`);
			const recipesByName = response.data;
			return dispatch(setRecipesByName(recipesByName));
		} catch (error) {
			console.error(error);
			alert(`There is no recipe named ${name}`);
		}
	};
};

export const updateSelected = (option) => {
	return (dispatch, getState) => {
		const { recipesByName, recipesAll, selected } = getState().recipeStore;

		let selectedRecipes = recipesByName ? recipesByName : recipesAll;
		selected = { ...selected, ...option };

		// Por tipo de dieta
		if (selected.byDiet.length)
			selectedRecipes = selectedRecipes.filter((recipe) =>
				recipe.diets.includes(selected.byDiet)
			);

		// Por creación
		if (selected.byCreated.length)
			selectedRecipes = selectedRecipes.filter((recipe) =>
				selected.byCreated === "DB" ? isNaN(recipe.id) : !isNaN(recipe.id)
			);

		// Health Score
		if (selected.byOrder === "MinToMax")
			selectedRecipes.sort((a, b) => a.healthScore - b.healthScore);
		if (selected.byOrder === "MaxToMin")
			selectedRecipes.sort((a, b) => b.healthScore - a.healthScore);

		//Alfabéticamente
		if (selected.byOrder === "Ascending")
			selectedRecipes.sort((a, b) => a.title.localeCompare(b.title));
		if (selected.byOrder === "Descending")
			selectedRecipes.sort((a, b) => b.title.localeCompare(a.title));

		dispatch(
			setSelected({ selected: selected, recipesShown: selectedRecipes, page: 1 })
		);
	};
};
