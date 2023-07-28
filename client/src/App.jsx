import style from "./App.module.css";
import { useLocation, Route, Routes } from "react-router-dom";
import { useState } from "react";
import {
  NavBar,
  Landing,
  Home,
  Detail,
  Update,
  About,
  NotFound,
} from "./components/";

function App() {
  const location = useLocation();
  const [palette, setPalette] = useState("palette0");

  const togglePalette = () => {
    const palettes = {
      palette0: "palette1",
      palette1: "palette2",
      palette2: "palette3",
      palette3: "palette0",
    };
    setPalette((prevPalette) => palettes[prevPalette]);
  };

  return (
    <div className={`${style.app} ${style[palette]}`}>
      {location.pathname !== "/" && <NavBar togglePalette={togglePalette} />}
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/home" element={<Home />} />
        <Route path="/detail/:id" element={<Detail />} />
        <Route path="/update/:id?" element={<Update />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
