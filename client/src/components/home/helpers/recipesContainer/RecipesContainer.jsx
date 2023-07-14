import Card from "../card/Card";
import style from "./RecipesContainer.module.css";
import PropTypes from "prop-types";

const RecipesContainer = ({ recipes }) => {
  return (
    <div className={style.cardsContain}>
      {recipes &&
        recipes.map((rec) => {
          return (
            <Card
              key={rec.id}
              id={rec.id}
              image={rec.image}
              title={rec.title}
              diets={rec.diets}
            />
          );
        })}
    </div>
  );
};

RecipesContainer.propTypes = {
  recipes: PropTypes.array.isRequired,
};

export default RecipesContainer;
