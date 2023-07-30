import { useSelector } from "react-redux";
import PropTypes from "prop-types";
import ButtonMenu from "./helpers/buttonMenu/ButtonMenu";
import NavBar from "./helpers/navBar/NavBar";

const Menu = ({ togglePalette }) => {
  const menu = useSelector((state) => state.recipeStore.menu);
  return (
    <div>
      <ButtonMenu />
      {menu && <NavBar togglePalette={togglePalette} />}
    </div>
  );
};

Menu.propTypes = {
  togglePalette: PropTypes.func.isRequired,
};

export default Menu;
