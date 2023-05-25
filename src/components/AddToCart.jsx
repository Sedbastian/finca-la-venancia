import "./styles/AddToCart.css";
import { useState, useContext } from "react";
import { CartDispatchContext } from "../CartContext";

export default function AddToCart({ inCart = false, name, quantityProp }) {
  const [quantity, setQuantity] = useState(quantityProp);
  const dispatch = useContext(CartDispatchContext);

  const [notAddedQ, setNotAddedQ] = useState(false);

  function addToCart(q) {
    dispatch({
      type: "added",
      name,
      quantity: q
    });
    setNotAddedQ(false);
  }

  function removeFromCart() {
    dispatch({
      type: "removed",
      name
    });
  }

  function decreaseQuantity() {
    if (inCart && quantity > 0) {
      addToCart(quantity - 1);
    }
    setQuantity(prevQuantity => {
      if (prevQuantity > 0) {
        return prevQuantity - 1;
      } else return 0;
    });
    if (!inCart && !notAddedQ) {
      setNotAddedQ(true);
    }
  }

  function incrementQuantity() {
    if (inCart) {
      addToCart(quantity + 1);
    }
    setQuantity(prevQuantity => {
      return prevQuantity + 1;
    });
    if (!inCart && !notAddedQ) {
      setNotAddedQ(true);
    }
  }

  return (
    <div className="addContainer">
      <div className="quantityContainer">
        <div className="quantityTitle">Cantidad</div>
        <button className="changeQuantity" onClick={decreaseQuantity}>
          –
        </button>
        <input
          type="number"
          name="quantity"
          value={`${quantity}`}
          onChange={e => setQuantity(e.target.value)}
        />
        <button className="changeQuantity" onClick={incrementQuantity}>
          +
        </button>
      </div>
      {inCart === false ? (
        <button
          className={!notAddedQ ? "addToCart" : "addToCart notAddedQ"}
          onClick={() => addToCart(quantity)}
        >
          Agregar al carrito
        </button>
      ) : (
        <button className="removeFromCart" onClick={removeFromCart}>
          Eliminar del carrito
        </button>
      )}
    </div>
  );
}
