import "./styles/Home.css";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBottleDroplet,
  faBrain,
  faJar
} from "@fortawesome/free-solid-svg-icons";
import foto1 from "./images/background/101_1215.JPG";
import foto2 from "./images/background/101_0518.JPG";
import foto3 from "./images/background/101_1221.JPG";

export default function Home() {
  useEffect(() => {
    window.scrollTo(0, 0);
  });

  return (
    <main className="home">
      <div className="homeContainer">
        <div className="pImgCont">
          <div className="imgContainer">
            <img src={foto3} alt="Olivos por Van Gogh" />
          </div>
          <p>
            {"    "}
            La Venancia esta ubicada en el pueblo de Santa Vera Cruz, al norte
            del departamento Castro Barros.
          </p>
        </div>
        <div className="pImgCont">
          <p>
            {"    "}
            Compuesta de un hermoso y viejo olivar de 160 olivos en convivencia
            con una gran diversidad de otros frutales como nogales, vid,
            duraznos, damascos, membrillos, higueras, todo conviviendo en
            armonía con el monte nativo.
          </p>
          <div className="imgContainer">
            <img src={foto1} alt="Olivos por Van Gogh" />
          </div>
        </div>
        <div className="pImgCont">
          <div className="imgContainer">
            <img src={foto2} alt="Olivos por Van Gogh" />
          </div>
          <p>
            {"    "}
            Hay también muchas aromaticas y tenemos espacios para huerta.
          </p>
        </div>
      </div>
      <Link to={`catalog`} className="catalogButton">
        <FontAwesomeIcon icon={faBottleDroplet} />
        <FontAwesomeIcon icon={faBrain} />
        <FontAwesomeIcon icon={faJar} /> Catálogo de Productos
      </Link>
    </main>
  );
}
