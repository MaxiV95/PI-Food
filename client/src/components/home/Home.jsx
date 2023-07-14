import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllRecipes, getAllDiets } from "../../redux/actionsRecipes";

import SearchBar from "./helpers/searchBar/SearchBar";
import RecipesContainer from "./helpers/recipesContainer/RecipesContainer";
import Paginated from "./helpers/paginated/Paginated";
import style from "./Home.module.css";

const Home = () => {
  const dispatch = useDispatch();
  const recipesShown = useSelector((state) => state.recipeStore.recipesShown);

  // Paginado!
  const page = useSelector((state) => state.recipeStore.page);
  const perPage = 9;
  const startIndex = (page - 1) * perPage;
  const endIndex = startIndex + perPage;
  const max = Math.ceil(recipesShown?.length / perPage);
  const recipes = recipesShown?.slice(startIndex, endIndex);

  useEffect(() => {
    dispatch(getAllRecipes());
    dispatch(getAllDiets());
  }, []);

  return (
    <div className={style.homeContainer}>
      <SearchBar />
      <div className={style.homeContent}>
        <h1>RECIPES FINDER</h1>
        <Paginated page={page} max={max} />
        <RecipesContainer recipes={recipes} />
        <Paginated page={page} max={max} />
      </div>
    </div>
  );
};

export default Home;
