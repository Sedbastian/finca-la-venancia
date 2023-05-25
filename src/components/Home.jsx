import "./styles/Home.css";
import { Link } from "react-router-dom";
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
  return (
    <main className="home">
      <div className="homeContainer">
        <div className="pImgCont">
          <div className="imgContainer">
            <img src={foto2} alt="Olivos por Van Gogh" />
          </div>
          <p>
            {
              "    Vincent Willem van Gogh (1853 – 1890) was a Dutch Post-Impressionist painter who posthumously became one of the most famous and influential figures in Western art history."
            }
          </p>
        </div>
        <div className="pImgCont">
          <p>
            {
              "    In a decade, he created about 2,100 artworks, including around 860 oil paintings, most of which date from the last two years of his life."
            }
          </p>
          <div className="imgContainer">
            <img src={foto1} alt="Olivos por Van Gogh" />
          </div>
        </div>
        <div className="pImgCont">
          <div className="imgContainer">
            <img src={foto3} alt="Olivos por Van Gogh" />
          </div>
          <p>
            {
              "    They include landscapes, still lifes, portraits and self-portraits, and are characterised by bold colours and dramatic, impulsive and expressive brushwork that contributed to the foundations of modern art."
            }
          </p>
        </div>
      </div>
      <Link to={`catalog`} className="catalogButton">
        <FontAwesomeIcon icon={faBottleDroplet} />
        <FontAwesomeIcon icon={faBrain} />
        <FontAwesomeIcon icon={faJar} /> Catálogo
      </Link>
    </main>
  );
}
