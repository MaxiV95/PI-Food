import style from "./About.module.css";
import photo from "./img/MaxiV95.jpeg";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { useState } from "react";

export default function About() {
  const [copied, setCopied] = useState(false);
  const onClick = () => {
    setCopied((prevCopied) => !prevCopied);
  };

  return (
    <div className={style.aboutContainer}>
      <div className={style.myContainer}>
        <img src={photo} alt="Maximiliano Van Megroot" />
        <h1>Maximiliano Van Megroot</h1>

        <span>
          <h2>
            <a
              href="https://github.com/MaxiV95"
              rel="noreferrer"
              target="_blank"
            >
              Github
            </a>
          </h2>
          <h2>
            <a
              href="https://www.linkedin.com/in/maximilianovanmegroot/"
              rel="noreferrer"
              target="_blank"
            >
              Linkedin
            </a>
          </h2>
        </span>

        <span>
          <CopyToClipboard text="maximilianovanmegroot@gmail.com">
            <h4 onClick={onClick}>Click on me!! get the email</h4>
          </CopyToClipboard>
          {copied && <p className={style.copied}>Copied!</p>}
        </span>
      </div>

      <div className={style.moreContainer}>
        <h1>Sobre mi...</h1>

        <h2>🤔Quien soy?🤔</h2>
        <p>
          Dicen que definirse es limitarse... pero aquí hay un poco sobre mi:
        </p>

        <h2>🏅Estudios🏅</h2>
        <p>
          Siempre tuve interés sobre el área técnica, la resolución de
          rompecabezas y gusto por la tecnología.
          <br />✅ Lo que me ha llevado a estudiar Full Stack Web Developer,
          Tecnicatura en electrónica, Gasista, Electricista y Tec en AA
        </p>

        <h2>🎭Intereses/Gustos🎭</h2>
        <ul>
          <li> 🚶 Senderismo montañoso.</li>
          <li>👨‍👩‍👦‍👧 Reuniones con familia y amistades.</li>
          <li> 🏊 Competencia de nado en aguas abiertas.</li>
        </ul>

        <h2>🔄En proceso...🔄</h2>
        <ul>
          <li>💻 Nuevas técnicas de programación.</li>
          <li> 🕺 Clases de salsa y bachata.</li>
          <li>🧐 búsqueda de nuevos desafíos.</li>
        </ul>
      </div>
    </div>
  );
}
