import { useDispatch } from "react-redux";
import { setPage } from "../../../../redux/actionsRecipes";
import style from "./Paginated.module.css";
import PropTypes from "prop-types";

const Paginated = ({ page, max }) => {
  const dispatch = useDispatch();

  // Calcular el rango de números a mostrar en el paginado
  let startPage = Math.max(1, page - 3);
  let endPage = Math.min(max, page + 3);

  // Ajustar el rango si no hay suficientes elementos
  if (endPage - startPage + 1 < 8) {
    if (startPage === 1) {
      endPage = Math.min(max, endPage + (8 - (endPage - startPage + 1)));
    } else {
      startPage = Math.max(1, startPage - (8 - (endPage - startPage + 1)));
    }
  }

  // Crear un array de números dentro del rango calculado
  const pages = Array.from(
    { length: endPage - startPage + 1 },
    (_, i) => startPage + i
  );

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
