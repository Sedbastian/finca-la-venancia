import "./styles/Home.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPalette, faPaintbrush } from "@fortawesome/free-solid-svg-icons";
import selfPortrait from "../catalog/Van-Gogh-Self-Portrait.jpg";

export default function Home({ currentTab, setCurrentTab }) {
  const bioText = `    Vincent Willem van Gogh (1853 – 1890) was a Dutch Post-Impressionist painter who posthumously became one of the most famous and influential figures in Western art history.

    In a decade, he created about 2,100 artworks, including around 860 oil paintings, most of which date from the last two years of his life.

    They include landscapes, still lifes, portraits and self-portraits, and are characterised by bold colours and dramatic, impulsive and expressive brushwork that contributed to the foundations of modern art.`;

  return (
    <main className="home">
      <div className="bioContainer">
        <div className="imgContainer">
          <img src={selfPortrait} alt="Van Gogh Self Portrait" />
        </div>
        <p>{bioText}</p>
      </div>
      <Link to={`catalog`}>
        <FontAwesomeIcon
          icon={faPalette}
          className={currentTab === "catalog" ? "currentTab" : ""}
        />
        <FontAwesomeIcon
          icon={faPaintbrush}
          className={currentTab === "catalog" ? "currentTab" : ""}
        />
      </Link>
    </main>
  );
}
