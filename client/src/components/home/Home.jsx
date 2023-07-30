import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllRecipes, getAllDiets } from "../../redux/actionsRecipes";

import RecipesContainer from "./helpers/recipesContainer/RecipesContainer";
import Paginated from "./helpers/paginated/Paginated";
import style from "./Home.module.css";

const Home = () => {
  const dispatch = useDispatch();
  const recipesShown = useSelector((state) => state.recipeStore.recipesShown);
  const dietsAll = useSelector((state) => state.recipeStore.dietsAll);

  // Paginado!
  const page = useSelector((state) => state.recipeStore.page);
  const perPage = 9;
  const startIndex = (page - 1) * perPage;
  const endIndex = startIndex + perPage;
  const max = Math.ceil(recipesShown?.length / perPage);
  const recipes = recipesShown?.slice(startIndex, endIndex);

  useEffect(() => {
    !recipesShown.length && dispatch(getAllRecipes());
    !dietsAll.length && dispatch(getAllDiets());
    // eslint-disable-next-line
  }, []);

  return (
    <div className={style.homeContainer}>
      <div className={style.title}>
        <h1>
          <z>RECIPES</z> <z>FINDER</z>
        </h1>
      </div>
      <Paginated page={page} max={max} />
      <RecipesContainer recipes={recipes} />
      <Paginated page={page} max={max} />
    </div>
  );
};

export default Home;
