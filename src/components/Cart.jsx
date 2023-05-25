import "./styles/Cart.css";
import { useContext } from "react";
import { CartContext } from "../CartContext";
import products from "./products";
import Card from "./Card";
import AddToCart from "./AddToCart";

export default function Cart() {
  const cart = useContext(CartContext);

  let totalAmount = 0;
  const billItems = [...cart.values()].map(item => {
    // Add item quantity to the item in products Map
    const product = products.get(item.name);
    products.set(item.name, {
      ...product,
      quantity: item.quantity
    });
    totalAmount += product.quantity * product.price;

    return (
      <li key={`billItem-${product.name}`}>
        <div className="number">{product.quantity}</div>
        <div>{product.name}</div>
        <div className="number">${product.price}</div>
        <div>{product.unit}</div>
        <div className="number productMult">${product.quantity * product.price}</div>
      </li>
    );
  });

  const totalAmountLi = (
    <li className="totalAmount">
      <div></div>
      <div>TOTAL</div>
      <div></div>
      <div></div>
      <div className="number total">${totalAmount}</div>
    </li>
  );

  const cartCards = [...cart.values()].map(item => {
    return (
      <Card key={item.name} product={products.get(item.name)}>
        <AddToCart
          inCart={true}
          name={item.name}
          quantityProp={item.quantity}
        />
      </Card>
    );
  });

  return (
    <main className="cart">
      <h2>Carrito de Compras</h2>
      {cart.size === 0 ? (
        <p>El carrito está vacio...</p>
      ) : (
        <ul className="cartTable">
          <li className="head">
            <div className="number">Cantidad</div>
            <div>Producto</div>
            <div className="number">Precio por unidad</div>
            <div>Unidad</div>
            <div className="number productMultHead">Subtotales</div>
          </li>
          {billItems}
          {totalAmountLi}
        </ul>
      )}
      <ul className="cartList">{cartCards}</ul>
    </main>
  );
}
