import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, Link } from "react-router-dom";
import {
  getAllRecipes,
  getAllDiets,
  getRecipeById,
  setLoading,
  handleRecipeFieldChange,
  updateRecipeById,
  postRecipe,
} from "../../redux/actionsRecipes";
import validate from "./validate";
import style from "./Update.module.css";
import Detail from "../detail/Detail";

const recipeUpdate = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const diets = useSelector((state) => state.recipeStore.dietsAll);
  const recipeId = useSelector((state) => state.recipeStore.recipeId);
  const [errors, setErrors] = useState({});

  // Al montar
  useEffect(() => {
    return () => dispatch(getRecipeById(undefined));
  }, []);

  useEffect(() => {
    setErrors(validate(recipeId));
  }, [recipeId]);

  // Al cambiar algún campo
  const handle = (event) => {
    const { name, value } = event.target;
    dispatch(handleRecipeFieldChange({ name, value }));
  };
  const handleSpecial = (event) => {
    const { name, value } = event.target;
    if (name === "steps") {
      dispatch(handleRecipeFieldChange({ name, value: value.split("\n") }));
    }
  };

  // Al cambiar algún check
  const checkHandle = (event) => {
    const { name, checked, value, title } = event.target;
    let diets = [...recipeId.diets];
    if (checked) diets.push({ id: value, name: title });
    else diets = diets.filter((diet) => diet.id !== value);
    dispatch(handleRecipeFieldChange({ name, value: diets }));
  };

  // Enviar cambios
  const handlerSubmit = async (event) => {
    event.preventDefault();
    if (!Object.keys(errors).length)
      id ? updateRecipeById(recipeId) : postRecipe(recipeId);
    dispatch(getAllRecipes("get"));
  };

  return (
    <div className={style.updateContainer}>
      <div className={style.formContainer}>
        {id && (
          <Link to={`/detail/${id}`}>
            <button className={style.cancel}>CANCEL</button>
          </Link>
        )}

        <form onSubmit={handlerSubmit}>
          <h2 className={style.line}>
            <label htmlFor="title">Title: </label>
            <input
              type="text"
              value={recipeId?.title}
              name="title"
              onChange={handle}
            />
            {errors.title && (
              <span className={style.errores}>{errors.title}</span>
            )}
          </h2>

          <h3 className={style.line}>
            <label htmlFor="image">Image URL: </label>
            <input
              type="url"
              value={recipeId?.image}
              name="image"
              onChange={handle}
            />
            {errors.image && (
              <span className={style.errores}>{errors.image}</span>
            )}
          </h3>

          <h3 className={style.line}>
            <label htmlFor="healthScore">HealthScore: </label>
            <input
              min="0"
              max="100"
              type="number"
              value={recipeId?.healthScore}
              name="healthScore"
              onChange={handle}
            />
            {errors.healthScore && (
              <span className={style.errores}>{errors.healthScore}</span>
            )}
          </h3>

          <div>
            <h3>Select Diets: </h3>
            <div className={style.allDiets}>
              {diets.map((dietRecipe) => {
                return (
                  <React.Fragment key={dietRecipe.id}>
                    <span>
                      <input
                        type="checkbox"
                        value={dietRecipe.id}
                        name="diets"
                        title={dietRecipe.name}
                        checked={
                          recipeId?.diets?.some(
                            (diet) => diet.id === dietRecipe.id
                          ) || false
                        }
                        onChange={checkHandle}
                      />
                      <label htmlFor="diets">{dietRecipe.name}</label>
                    </span>
                  </React.Fragment>
                );
              })}
            </div>
            {errors.diets && (
              <span className={style.errores}>{errors.diets}</span>
            )}
          </div>

          <h3>
            <label htmlFor="summary">Summary: </label>
            <br />
            <textarea
              cols="30"
              rows="10"
              value={recipeId.summary}
              name="summary"
              onChange={handle}
            />
            {errors.summary && (
              <span className={style.errores}>{errors.summary}</span>
            )}
          </h3>

          <h3>
            <label htmlFor="steps">Steps: </label>
            <br />
            <textarea
              cols="30"
              rows="10"
              value={recipeId?.steps?.join("\n")}
              name="steps"
              onChange={handleSpecial}
            />
            {errors.steps && (
              <span className={style.errores}>{errors.steps}</span>
            )}
          </h3>
          <button type="submit">SUBMIT</button>
        </form>
      </div>

      <div className={style.detailContainer}>
        <h1 className={style.preview}>-- PREVIEW --</h1>
        <Detail updateDetail={style.updateDetail} block={style.block} />
      </div>
    </div>
  );
};

export default recipeUpdate;
