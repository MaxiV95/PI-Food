import { useDispatch, useSelector } from "react-redux";
import style from "./ButtonMenu.module.css";
import { setMenu } from "../../redux/actionsRecipes";

const ButtonMenu = () => {
  const dispatch = useDispatch();
  const menu = useSelector((state) => state.recipeStore.menu);
  return (
    <div className={style.checkIconContainer}>
      <input
        hidden
        className={style.checkIcon}
        id="checkIcon"
        name="checkIcon"
        type="checkbox"
        checked={menu}
        onChange={(event) => dispatch(setMenu(event.target.checked))}
      />
      <label className={style.iconMenu} htmlFor="checkIcon">
        <div className={`${style.bar} ${style.bar1}`}></div>
        <div className={`${style.bar} ${style.bar2}`}></div>
        <div className={`${style.bar} ${style.bar3}`}></div>
      </label>
    </div>
  );
};

export default ButtonMenu;
