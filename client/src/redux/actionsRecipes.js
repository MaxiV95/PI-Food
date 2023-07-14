import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import TYPE from "./types";

const initialState = {
  dietsAll: [], // todas
  recipesAll: [], // todas (primeras 100)
  recipesShown: [], // mostradas
  recipesByName: [], // buscadas por nombre
  recipeId: {
    id: "",
    title: "",
    summary: "",
    healthScore: "",
    steps: [],
    image: "",
    diets: [],
  }, // buscadas por id

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
      state.recipesShown = [...payload];
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
    setRecipeId: (state, { payload }) => {
      state.recipeId = { ...payload };
    },
    handleRecipeFieldChange: (state, { payload }) => {
      const { name, value } = payload;
      state.recipeId = {
        ...state.recipeId,
        [name]: value,
      };
    },
    setSelected: (state, { payload }) => {
      state.selected = { ...state.selected, ...payload.selected };
      state.recipesShown = payload.recipesShown;
      state.page = payload.page;
    },
    setPage: (state, { payload }) => {
      state.page = payload;
    },
  },
});
export const {
  setDiets,
  setRecipesAll,
  setRecipesByName,
  setRecipeId,
  handleRecipeFieldChange,
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
      return dispatch(setDiets(allDiets));
    } catch (error) {
      console.log(error.message);
    }
  };
};

// Trae y guarda las recetas en recipesAll y recipesShown
// Si ya existen en recipesAll no vuelve a llamar al back
export const getAllRecipes = () => {
  return async (dispatch, getState) => {
    const { recipesAll } = getState().recipeStore;

    if (recipesAll.length > 0) return dispatch(setRecipesAll(recipesAll));

    try {
      const response = await getRecipes();
      return dispatch(setRecipesAll(response));
    } catch (error) {
      console.log(error.message);
    }
  };
};

// Busca receta por id
export const getRecipeById = (id) => {
  return async (dispatch) => {
    if (!id)
      return dispatch(
        setRecipeId({
          id: "",
          title: "",
          summary: "",
          healthScore: "",
          steps: [],
          image: "",
          diets: [],
        })
      );

    try {
      const response = await axios.get(`/recipes/${id}`);
      const data = response.data;
      dispatch(setRecipeId(data));
    } catch (error) {
      alert(`There is no recipe with the ID: ${id}`);
      console.log(error.message);
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
      alert(`There is no recipe named ${name} ${error.message}`);
    }
  };
};

export const updateSelected = (option) => {
  return (dispatch, getState) => {
    const { recipesByName, recipesAll, selected } = getState().recipeStore;

    let selectedRecipes = recipesByName.length
      ? [...recipesByName]
      : [...recipesAll];
    let select = { ...selected, ...option };

    // Por tipo de dieta
    if (select.byDiet.length)
      selectedRecipes = selectedRecipes.filter((recipe) =>
        recipe.diets.some((diet) => diet.name === select.byDiet)
      );

    // Por creación
    if (select.byCreated.length)
      selectedRecipes = selectedRecipes.filter((recipe) =>
        select.byCreated === TYPE.DB ? isNaN(recipe.id) : !isNaN(recipe.id)
      );

    // Health Score
    if (select.byOrder === TYPE.MinToMax)
      selectedRecipes.sort((a, b) => a.healthScore - b.healthScore);
    if (select.byOrder === TYPE.MaxToMin)
      selectedRecipes.sort((a, b) => b.healthScore - a.healthScore);

    //Alfabéticamente
    if (select.byOrder === TYPE.Ascending)
      selectedRecipes.sort((a, b) => a.title.localeCompare(b.title));
    if (select.byOrder === TYPE.Descending)
      selectedRecipes.sort((a, b) => b.title.localeCompare(a.title));

    return dispatch(
      setSelected({ selected: select, recipesShown: selectedRecipes, page: 1 })
    );
  };
};

// Elimina receta por id
export const deleteRecipeById = (id) => {
  return async (dispatch) => {
    try {
      await axios.delete(`/recipes/${id}`);
      alert("successfully removed");
      const response = await getRecipes();
      return dispatch(setRecipesAll(response));
    } catch (error) {
      alert(error.message + `There is no recipe with the ID: ${id}`);
    }
  };
};

// Postea una nueva receta
export const postRecipe = (data) => {
  return async (dispatch) => {
    try {
      await axios.post("/recipes", data);
      alert("Successfully created");
      const response = await getRecipes();
      return dispatch(setRecipesAll(response));
    } catch (error) {
      console.log(error.message);
    }
  };
};

// Actualiza receta por id
export const updateRecipeById = (data) => {
  return async (dispatch) => {
    try {
      await axios.put("/recipes", data);
      alert("Successfully updated");
      const response = await getRecipes();
      return dispatch(setRecipesAll(response));
    } catch (error) {
      console.log(error.message);
    }
  };
};

const getRecipes = async () => {
  const response = await axios.get("/recipes");
  return response.data;
};