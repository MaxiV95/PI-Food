import Card from "../card/Card";
import style from "./CardsContainer.module.css";

const CardsContainer = ({ recipes }) => {
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

export default CardsContainer;
