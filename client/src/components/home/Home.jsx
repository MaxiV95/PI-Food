// import { SearchBar, CardsContainer, Paginado } from "../index";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllRecipes, getAllDiets } from "../../redux/actionsRecipes";
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
      if (!diets.length) {
        dispatch(getAllRecipes());
        dispatch(getAllDiets());
      }
    }, []);

	return (
		<div className={style.homeContainer}>
			{/* <SearchBar /> */}
			<br />
			<h1>RECIPES FINDER</h1>
			{/* <CardsContainer recipesAll={recipes} /> */}
			<footer>{/* <Paginado page={page} max={max} /> */}</footer>
		</div>
	);
};

export default Home;
