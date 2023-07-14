import style from "./Paginated.module.css";
import { useDispatch } from "react-redux";
import { setPage } from "../../../../redux/actionsRecipes";
import PropTypes from "prop-types";

const Paginated = ({ page, max }) => {
  const dispatch = useDispatch();
  // Crear un array de números entre 1 y 'max
  const pages = Array.from({ length: max }, (_, i) => i + 1);

  const selectPage = (num) => {
    dispatch(setPage(num));
  };
  return (
    <div className={style.paginatedContainer}>
      <button disabled={page === 1} onClick={() => selectPage(page - 1)}>
        {"<"}
      </button>

      {pages.map((pageMap) => (
        <button
          className={`${page === pageMap ? style.active : ""}`}
          key={pageMap}
          onClick={() => selectPage(pageMap)}
        >
          {pageMap}
        </button>
      ))}

      <button disabled={page === max} onClick={() => selectPage(page + 1)}>
        {">"}
      </button>
    </div>
  );
};

Paginated.propTypes = {
  page: PropTypes.number.isRequired,
  max: PropTypes.number.isRequired,
};

export default Paginated;
