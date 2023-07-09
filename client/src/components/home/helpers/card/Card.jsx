import style from "./Card.module.css";
import { Link } from "react-router-dom";

const Card = (props) => {
	return (
		<Link to={`/detail/${props.id}`}>
			<div className={style.cardContainer}>
				<img src={props.image} alt={props.title} />
				<h2>{props.title}</h2>
				<h3>Diets: {props.diets}</h3>
			</div>
		</Link>
	);
};

export default Card;
