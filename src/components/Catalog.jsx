import { useEffect } from "react";
import products from "./products";
import Card from "./Card";
import AddToCart from "./AddToCart";

export default function Catalog() {
  useEffect(() => {
    window.scrollTo(0, 0);
  });

  return (
    <main className="catalog">
      <ul className="productsList">
        {[...products.values()].map(product => {
          return (
            <Card key={product.name} product={product}>
              <AddToCart name={product.name} quantityProp={product.quantity} />
            </Card>
          );
        })}
      </ul>
    </main>
  );
}
