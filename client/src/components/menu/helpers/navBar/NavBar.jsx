import { Link, useLocation } from "react-router-dom";
import style from "./NavBar.module.css";
import PropTypes from "prop-types";
import SearchBar from "./searchBar/SearchBar";
import { useDispatch } from "react-redux";
import { setMenu } from "../../../../redux/actionsRecipes";

const NavBar = ({ togglePalette }) => {
  const location = useLocation();
  const dispatch = useDispatch();

  const onClick = () => {
    dispatch(setMenu(false));
  };
  return (
    <div className={style.navBarContainer}>
      {location.pathname !== "/home" && (
        <Link to="/home">
          <button className={style.button} onClick={onClick}>
            HOME
          </button>
        </Link>
      )}
      {location.pathname === "/home" && (
        <Link to="/update">
          <button className={style.button} onClick={onClick}>
            CREATE
          </button>
        </Link>
      )}
      {location.pathname !== "/about" && (
        <Link to="/about">
          <button className={style.button} onClick={onClick}>
            ABOUT
          </button>
        </Link>
      )}
      <button className={style.button} onClick={togglePalette}>
        THEME
      </button>
      {location.pathname === "/home" && <SearchBar />}
    </div>
  );
};

NavBar.propTypes = {
  togglePalette: PropTypes.func.isRequired,
};

export default NavBar;
