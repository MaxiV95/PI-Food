import { Link } from "react-router-dom";
import style from "./NavBar.module.css";

const NavBar = ({ togglePalette }) => {
	return (
    <div className={style.navBarContainer}>
      <span>
        <Link to="/">
          <button className={style.button}>LANDING</button>
        </Link>
        <Link to="/home">
          <button className={style.button}>HOME</button>
        </Link>
        <Link to="/update">
          <button className={style.button}>CREATE</button>
        </Link>
        <Link to="/about">
          <button className={style.button}>ABOUT</button>
        </Link>
        <button className={style.button} onClick={togglePalette}>
          THEME
        </button>
      </span>
    </div>
  );
};

export default NavBar;
