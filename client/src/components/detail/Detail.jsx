import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, Link, useLocation } from "react-router-dom";
import { getRecipeById, deleteRecipeById } from "../../redux/actionsRecipes";
import style from "./Detail.module.css";
import PropTypes from "prop-types";

const Detail = ({ updateDetail = "", block = "" }) => {
  const location = useLocation();
  const dispatch = useDispatch();
  const { id } = useParams();
  const recipeId = useSelector((state) => state.recipeStore.recipeId);

  useEffect(() => {
    dispatch(getRecipeById(id));
    return () => dispatch(getRecipeById(undefined));
    // eslint-disable-next-line
  }, []);

  const renderedSteps = recipeId?.steps?.map((step, index) => (
    <React.Fragment key={index}>
      {" -> " + step}
      <br />
    </React.Fragment>
  ));

  return (
    <div className={`${style.detailContainer} ${updateDetail}`}>
      <div className={`${style.block1} ${block}`}>
        {location.pathname.startsWith("/detail/") && (
          <span>
            <Link to="/home">
              <button className={style.close}>CLOSE</button>
            </Link>

            {isNaN(recipeId?.id) && (
              <button
                className={style.delete}
                onClick={() => dispatch(deleteRecipeById(id))}
              >
                DELETE
              </button>
            )}

            {isNaN(recipeId?.id) && (
              <Link to={`/update/${id}`}>
                <button className={style.update}>UPDATE</button>
              </Link>
            )}
          </span>
        )}

        <h1>{recipeId?.title}</h1>
        <img src={recipeId?.image} alt={"Image not found"} />
        {recipeId?.id && <h2>ID: {recipeId.id}</h2>}
        <h2>{`HealthScore: ${recipeId?.healthScore}`}</h2>
        <h3>Diets: </h3>
        <p>{recipeId?.diets?.map((diet) => diet.name).join(", ")}</p>
      </div>

      <div className={`${style.block2} ${block}`}>
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

Detail.propTypes = {
  updateDetail: PropTypes.string,
  block: PropTypes.string,
};

export default Detail;
