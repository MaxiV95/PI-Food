import style from "./Card.module.css";
import { Link } from "react-router-dom";

const Card = (recipe) => {
  return (
    <Link to={`/detail/${recipe.id}`}>
      <div className={style.cardContainer}>
        <img src={recipe.image} alt={recipe.title} />
        <h2>{recipe.title}</h2>
        <h3>Diets: {recipe.diets?.map((diet) => diet.name).join(", ")}</h3>
      </div>
    </Link>
  );
};

export default Card;
