import style from "./App.module.css";
import { useLocation, Route, Routes } from "react-router-dom";
import { useState } from "react";
import { NavBar, Landing } from "./components/";

function App() {
	const location = useLocation();
	const [palette, setPalette] = useState("palette0");

	const togglePalette = () => {
		setPalette((prevPalette) => {
			switch (prevPalette) {
				case "palette0":
					return "palette1";
				case "palette1":
					return "palette2";
				case "palette2":
					return "palette3";
				case "palette3":
					return "palette0";
			}
		});
	};

	return (
		<div className={`${style.app} ${style[palette]}`}>
			{location.pathname !== "/" && <NavBar togglePalette={togglePalette} />}
			<Routes>
				<Route path="/" element={<Landing />} />
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
