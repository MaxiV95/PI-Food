import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getAllRecipes,
  getRecipeByName,
  updateSelected,
} from "../../../../redux/actionsRecipes";
import TYPE from "../../../../redux/types";
import style from "./SearchBar.module.css";
import SearchIcon from "./SearchIcon";

const SearchBar = () => {
  const dispatch = useDispatch();
  const diets = useSelector((state) => state.recipeStore.dietsAll);
  const selected = useSelector((state) => state.recipeStore.selected);

  const handleChange = (event) => {
    const { name, value } = event.target;
    dispatch(updateSelected({ [name]: value }));
  };

  // Buscar por nombre
  const [name, setName] = useState("");

  const onSearch = () => {
    try {
      dispatch(getRecipeByName(name));
      setName("");
    } catch (err) {
      window.alert("There are no recipes with that name");
    }
  };

  return (
    <div className={style.searchBarContainer}>
      <button onClick={() => dispatch(getAllRecipes())}>All Recipes</button>

      <span>
        <input
          type="search"
          value={name}
          onChange={(event) => setName(event.target.value)}
        />
        <button className={style.searchButton} onClick={onSearch}>
          <SearchIcon />
        </button>
      </span>

      <select
        value={selected.byDiet}
        name={TYPE.byDiet}
        onChange={handleChange}
      >
        <option value="">Filter by diet</option>
        {diets?.map((diet) => (
          <option value={diet.name} key={diet.id}>
            {diet.name}
          </option>
        ))}
      </select>

      <select
        value={selected.byCreated}
        name={TYPE.byCreated}
        onChange={handleChange}
      >
        <option value="">Filter by created</option>
        <option value={TYPE.DB}>Created by User</option>
        <option value={TYPE.API}>Created by App</option>
      </select>

      <select
        value={selected.byOrder}
        name={TYPE.byOrder}
        onChange={handleChange}
      >
        <option value="">Order by..</option>
        <option value={TYPE.MinToMax}>HealthScore largest</option>
        <option value={TYPE.MaxToMin}>HealthScore smallest</option>
        <option value={TYPE.Ascending}>Title ascending</option>
        <option value={TYPE.Descending}>Title descending</option>
      </select>
    </div>
  );
};

export default SearchBar;
