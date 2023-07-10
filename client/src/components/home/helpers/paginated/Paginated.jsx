import style from "./Paginated.module.css";
import { useDispatch } from "react-redux";
import { setPage } from "../../../../redux/actionsRecipes";

const Paginado = ({ page, max }) => {
  const dispatch = useDispatch();
  // Crear un array de números entre 1 y 'max
  const pages = Array.from({ length: max }, (_, i) => i + 1);

  const selectPage = (num) => {
    dispatch(setPage(num));
  };
  return (
    <div className={style.paginatedContainer}>
      <button
        disabled={page === 1}
        onClick={() => selectPage(page - 1)}
      >
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

      <button
        disabled={page === max}
        onClick={() => selectPage(page + 1)}
      >
        {">"}
      </button>
    </div>
  );
};

export default Paginado;
