import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getAllDiets,
  getRecipeById,
  setRecipeId,
  updateRecipeById,
} from "../../redux/actionsRecipes";
import { useParams } from "react-router-dom";
import validate from "./validate";
import style from "./Update.module.css";

const recipeUpdate = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const diets = useSelector((state) => state.recipeStore.dietsAll);
  const recipeId = useSelector((state) => state.recipeStore.recipeId);
  const [recipeUpdate, setRecipeUpdate] = useState({
    id: undefined,
    title: "",
    summary: "",
    healthScore: 0,
    steps: "",
    image: "",
    diets: {},
  });
  const [errors, setErrors] = useState({});

  useEffect(() => {
    dispatch(getRecipeById(id));
    dispatch(getAllDiets());
    return () => dispatch(setRecipeId(undefined));
  }, []);

  useEffect(() => {
    if (recipeId) {
      setRecipeUpdate({
        id: recipeId.id,
        title: recipeId.title,
        summary: recipeId.summary,
        healthScore: recipeId.healthScore,
        steps: recipeId.steps ? recipeId.steps.join("\n") : "",
        image: recipeId.image,
        diets: {},
      });

      for (const diet of recipeId.diets) {
        const dietId = diets.find((dietFind) => dietFind.name === diet)?.id;
        if (dietId)
          setRecipeUpdate((prevRecipeUpdate) => ({
            ...prevRecipeUpdate,
            diets: {
              ...prevRecipeUpdate.diets,
              [dietId]: true,
            },
          }));
      }
    }
  }, [recipeId]);

  // Al cambiar algún campo
  const handleChange = (event) => {
    const { name, value } = event.target;
    setRecipeUpdate({
      ...recipeUpdate,
      [name]: value,
    });
    setErrors(
      validate({
        ...recipeUpdate,
        [name]: value,
      })
    );
  };

  // Al cambiar algún check
  const checkHandle = (event) => {
    const { checked, value } = event.target;
    setRecipeUpdate({
      ...recipeUpdate,
      diets: {
        ...recipeUpdate.diets,
        [value]: checked,
      },
    });
    setErrors(
      validate({
        ...recipeUpdate,
        diets: {
          ...recipeUpdate.diets,
          [value]: checked,
        },
      })
    );
  };

  // Ajusta el Formato de valores
  const Format = (recipe) => {
    return {
      id: id,
      title:
        recipe.title.charAt(0).toUpperCase() +
        recipe.title.slice(1).toLowerCase(),
      image: recipe.image,
      vegetarian: recipe.vegetarian,
      vegan: recipe.vegan,
      glutenFree: recipe.glutenFree,
      summary: recipe.summary.replace("\n", " "),
      healthScore: recipe.healthScore,
      steps: recipe.steps.split("\n"),
      diets: Object.entries(recipe.diets) // Array de matrices clave-valor
        .filter(([key, value]) => value === true) // Solo matrices con true
        .map(([key, value]) => key), // solo las keys (id de dietas)
    };
  };

  const handlerSubmit = async (event) => {
    event.preventDefault();
    // En caso de que no existan errores postea la receta
    if (!Object.keys(errors).length)
      await updateRecipeById(Format(recipeUpdate));
    dispatch(getAllRecipes());
  };

  return (
    <form className={style.updateContainer} onSubmit={handlerSubmit}>
      <div>
        <label htmlFor="title">Title:</label>
        <input
          type="text"
          value={recipeUpdate.title}
          name="title"
          onChange={handleChange}
        />
        {errors.title && <span className={style.errores}>{errors.title}</span>}
      </div>

      <div>
        <label htmlFor="image">Image URL: </label>
        <input
          type="url"
          value={recipeUpdate.image}
          name="image"
          onChange={handleChange}
        />
        {errors.image && <span className={style.errores}>{errors.image}</span>}
      </div>

      <div>
        <label htmlFor="healthScore">HealthScore: </label>
        <input
          min="0"
          max="100"
          type="number"
          value={recipeUpdate.healthScore}
          name="healthScore"
          onChange={handleChange}
        />
        {errors.healthScore && (
          <span className={style.errores}>{errors.healthScore}</span>
        )}
      </div>

      <div>
        <label htmlFor="summary">Summary: </label>
        <br />
        <textarea
          cols="30"
          rows="10"
          value={recipeUpdate.summary}
          name="summary"
          onChange={handleChange}
        />
        {errors.summary && (
          <span className={style.errores}>{errors.summary}</span>
        )}
      </div>

      <div>
        <label htmlFor="steps">Steps: </label>
        <br />
        <textarea
          cols="30"
          rows="10"
          value={recipeUpdate.steps}
          name="steps"
          onChange={handleChange}
        />
        {errors.steps && <span className={style.errores}>{errors.steps}</span>}
      </div>

      <div>
        <label htmlFor="diets">Select Diets</label>
        <div>
          {diets.map((diet) => {
            return (
              <React.Fragment key={diet.id}>
                <input
                  type="checkbox"
                  value={diet.id}
                  name="diets"
                  checked={recipeUpdate?.diets[diet.id] || false}
                  onChange={checkHandle}
                />
                <label htmlFor="diets">{diet.name}</label>
              </React.Fragment>
            );
          })}
        </div>
        {errors.diets && <span className={style.errores}>{errors.diets}</span>}
      </div>

      <button type="submit" disabled={Object.keys(errors).length}>
        SUBMIT
      </button>
    </form>
  );
};

export default recipeUpdate;
