import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getAllRecipes,
  getAllDiets,
  setLoading,
} from "../../redux/actionsRecipes";
import { SearchBar, CardsContainer, Paginado } from "./helpers";
import style from "./Home.module.css";

const Home = () => {
  const dispatch = useDispatch();
  const recipesShown = useSelector((state) => state.recipeStore.recipesShown);
  const diets = useSelector((state) => state.recipeStore.dietsAll);

  // Paginado!
  const page = useSelector((state) => state.recipeStore.page);
  const perPage = 9;
  const startIndex = (page - 1) * perPage;
  const endIndex = startIndex + perPage;
  const max = Math.ceil(recipesShown?.length / perPage);
  const recipes = recipesShown?.slice(startIndex, endIndex);

  useEffect(() => {
    dispatch(getAllRecipes("get"));
    dispatch(getAllDiets());
    !recipesShown?.length || (!diets?.length && dispatch(setLoading(true)));
  }, []);

  return (
    <div className={style.homeContainer}>
      <SearchBar />
      <div className={style.homeContent}>
        <h1>RECIPES FINDER</h1>
        <Paginado page={page} max={max} />
        <CardsContainer recipes={recipes} />
        <Paginado page={page} max={max} />
      </div>
    </div>
  );
};

export default Home;
