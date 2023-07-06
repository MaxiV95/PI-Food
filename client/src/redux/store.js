import { configureStore } from "@reduxjs/toolkit";
import recipes from "./actionsRecipes";

export const store = configureStore({
	reducer: {
		recipeStore: recipes,
		// userStore: {}
	},
});
