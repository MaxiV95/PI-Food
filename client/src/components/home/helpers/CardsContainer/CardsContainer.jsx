import { Card } from "../";
import style from "./CardsContainer.module.css";

const CardsContainer = ({ recipes }) => {
  return (
    <div className={style.cardsContainer}>
      {recipes && recipes.map((rec) => {
        return (
          <Card
            key={rec.id}
            id={rec.id}
            image={rec.image}
            title={rec.title}
            diets={rec.diets.join(", ")}
          />
        );
      })}
    </div>
  );
};

export default CardsContainer;
