import "./styles/Header.css";
import { useLocation, Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouseChimney,
  faPalette,
  faPaintbrush,
  faCartShopping
} from "@fortawesome/free-solid-svg-icons";

export default function Header() {
  const location = useLocation();

  return (
    <header>
      <div className="container">
        <h1>Van Gogh's Paintings' Shop</h1>
        <nav>
          <Link to={`/`}>
            <FontAwesomeIcon
              icon={faHouseChimney}
              className={location.pathname === "/" ? "currentTab" : ""}
            />
          </Link>
          <Link to={`catalog`}>
            <FontAwesomeIcon
              icon={faPalette}
              className={location.pathname === "/catalog" ? "currentTab" : ""}
            />
            <FontAwesomeIcon
              icon={faPaintbrush}
              className={location.pathname === "/catalog" ? "currentTab" : ""}
            />
          </Link>
          <Link to={`cart`}>
            <FontAwesomeIcon
              icon={faCartShopping}
              className={location.pathname === "/cart" ? "currentTab" : ""}
            />
          </Link>
        </nav>
      </div>
    </header>
  );
}
