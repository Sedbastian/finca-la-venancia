import "./styles/Header.css";
import { useLocation, Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../CartContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouseChimney,
  faBottleDroplet,
  faBrain,
  faJar,
  faBasketShopping
} from "@fortawesome/free-solid-svg-icons";

export default function Header() {
  const location = useLocation();
  const cartQuantity = useContext(CartContext).size;

  return (
    <header>
      <div className="container">
        <h1>
          <div className="finca">Finca Agroecológica</div>{" "}
          <div className="venancia">“La Venancia”</div>
        </h1>
        <nav>
          <Link
            to={`/`}
            className={
              location.pathname === "/" ? "homeLink currentTab" : "homeLink"
            }
            title="headerHome"
          >
            <FontAwesomeIcon icon={faHouseChimney} />
          </Link>
          <Link
            to={`catalog`}
            className={
              location.pathname === "/catalog"
                ? "catalogLink currentTab"
                : "catalogLink"
            }
            title="headerCatalog"
          >
            <FontAwesomeIcon icon={faBottleDroplet} />
            <FontAwesomeIcon icon={faBrain} />
            <FontAwesomeIcon icon={faJar} />
          </Link>
          <Link
            to={`cart`}
            className={
              location.pathname === "/cart" ? "cartLink currentTab" : "cartLink"
            }
            title="headerCart"
          >
            <FontAwesomeIcon icon={faBasketShopping} />
            {cartQuantity > 0 && (
              <div className="cartQuantityContainer">
                <div className="cartQuantity">{cartQuantity}</div>
              </div>
            )}
          </Link>
        </nav>
      </div>
    </header>
  );
}
