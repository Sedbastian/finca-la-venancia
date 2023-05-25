import "./App.css";
import { Outlet } from "react-router-dom";
import { useReducer } from "react";
import { CartContext, CartDispatchContext } from "./CartContext";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  const [cart, dispatch] = useReducer(cartReducer, new Map());

  function cartReducer(cart, action) {
    switch (action.type) {
      case "added": {
        const updatedCart = new Map(
          cart.set(action.name, {
            name: action.name,
            quantity: action.quantity
          })
        );
        return updatedCart;
      }
      case "removed": {
        cart.delete(action.name);
        const updatedCart = new Map(cart);
        return updatedCart;
      }
      default:
        throw Error("Unknown action: " + action.type);
    }
  }

  return (
    <div className="appContainer">
      <CartContext.Provider value={cart}>
        <CartDispatchContext.Provider value={dispatch}>
          <Header />
          <Outlet />
          <Footer />
        </CartDispatchContext.Provider>
      </CartContext.Provider>
    </div>
  );
}

export default App;
