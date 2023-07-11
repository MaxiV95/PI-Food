import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useParams, Link } from "react-router-dom";
import {
  getAllRecipes,
  getRecipeById,
  deleteRecipeById,
} from "../../redux/actionsRecipes";
import style from "./Detail.module.css";

const Detail = () => {
  const dispatch = useDispatch();
  const { id } = useParams();

  const [recipeId, setRecipeId] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const recipe = await getRecipeById(id);
      setRecipeId(recipe);
    };
    fetchData();
  }, [id]);

  const dietsUpperCase = recipeId?.diets?.map((diet) => {
    return diet.charAt(0).toUpperCase() + diet.slice(1);
  });

  const renderedSteps = recipeId?.steps?.map((step, index) => (
    <React.Fragment key={index}>
      {" -> " + step}
      <br />
    </React.Fragment>
  ));

  const deleteRecipe = async () => {
    await deleteRecipeById(id);
    dispatch(getAllRecipes());
    alert("successfully removed");
  };

  return (
    <div className={style.detailContainer}>
      <div className={style.block1}>
        <span>
          <Link to="/home">
            <button className={style.close}>CLOSE</button>
          </Link>

          {isNaN(recipeId?.id) && (
            <Link to="/home">
              <button className={style.delete}>DELETE</button>
            </Link>
          )}

          {isNaN(recipeId?.id) && (
            <Link to={`/upload/${id}`}>
              <button className={style.update}>UPDATE</button>
            </Link>
          )}
        </span>

        <h1>{recipeId?.title}</h1>
        <img src={recipeId?.image} alt={recipeId?.title} />
        <h2>ID: {recipeId?.id}</h2>

        {recipeId?.healthScore && (
          <h2>{`HealthScore: ${recipeId.healthScore}`}</h2>
        )}

        <h3>Diets: </h3>
        {dietsUpperCase && <p>{dietsUpperCase.join(", ")}</p>}
      </div>

      <div className={style.block2}>
        <h3>Summary: </h3>
        <p>{recipeId?.summary}</p>

        <h3>Steps: </h3>
        {recipeId?.steps && <p>{renderedSteps}</p>}
      </div>
    </div>
  );
};

export default Detail;
