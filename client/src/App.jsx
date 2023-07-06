import style from "./App.module.css";
import { useLocation, Route, Routes } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getAllDiets } from "./redux/actionsRecipes";

function App() {
	const location = useLocation();
	const dispatch = useDispatch();

	return (
		<div className={style.App}>
			Hello world
			<button onClick={() => dispatch(getAllDiets())}>click</button>
			{/* {location.pathname !== "/" && <NavBar />} */}
			<Routes>
				{/* <Route path="/" element={<Landing />} /> */}
				{/* <Route path="/home" element={<Home />} /> */}
				{/* <Route path="/form" element={<Form />} /> */}
				{/* <Route path="/detail/:id" element={<Detail />} /> */}
				{/* <Route path="/about" element={<About />} /> */}
				{/* <Route path="/upload/:id" element={<Upload />} /> */}
				{/* <Route path="*" element={<NotFound />} /> */}
			</Routes>
		</div>
	);
}

export default App;
