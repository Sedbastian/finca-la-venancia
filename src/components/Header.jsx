import "./styles/Header.css";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header>
      <Link to={`/`}>
        <h1>Van Gogh's Paintings' Shop</h1>
      </Link>
      <Link to={`catalog`}>Catalog</Link>
      <input type="text" name="search" id="search" />
      <Link to={`cart`}>Cart</Link>
    </header>
  );
}
