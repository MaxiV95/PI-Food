import { useSelector } from "react-redux";

import RecipesContainer from "./helpers/recipesContainer/RecipesContainer";
import Paginated from "./helpers/paginated/Paginated";
import style from "./Home.module.css";

const Home = () => {
  const recipesShown = useSelector((state) => state.recipeStore.recipesShown);

  // Paginado!
  const page = useSelector((state) => state.recipeStore.page);
  const perPage = 9;
  const startIndex = (page - 1) * perPage;
  const endIndex = startIndex + perPage;
  const max = Math.ceil(recipesShown?.length / perPage);
  const recipes = recipesShown?.slice(startIndex, endIndex);

  return (
    <div className={style.homeContainer}>
      <div className={style.title}>
        <h1>
          <span>RECIPES</span> <span>FINDER</span>
        </h1>
      </div>
      <Paginated page={page} max={max} />
      <RecipesContainer recipes={recipes} />
      <Paginated page={page} max={max} />
    </div>
  );
};

export default Home;
