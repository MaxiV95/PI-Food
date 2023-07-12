import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, Link } from "react-router-dom";
import {
  getAllRecipes,
  setRecipeId,
  getRecipeById,
  deleteRecipeById,
} from "../../redux/actionsRecipes";
import style from "./Detail.module.css";

const Detail = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const recipeId = useSelector((state) => state.recipeStore.recipeId);

  useEffect(() => {
    dispatch(getRecipeById(id));
    return () => dispatch(setRecipeId(undefined));
  }, []);

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
            <Link to={`/update/${id}`}>
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

        {recipeId?.diets && (
          <>
            <h3>Diets: </h3>
            <p>{recipeId.diets.map((diet) => diet.name).join(", ")}</p>
          </>
        )}
      </div>

      <div className={style.block2}>
        {recipeId && (
          <>
            <h3>Summary: </h3>
            <p>{recipeId.summary}</p>
          </>
        )}
        {recipeId?.steps && (
          <>
            <h3>Steps: </h3>
            <p>{renderedSteps}</p>
          </>
        )}
      </div>
    </div>
  );
};

export default Detail;
