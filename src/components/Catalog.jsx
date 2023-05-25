import "./styles/Catalog.css";
import products from "./products";
import Card from "./Card";
import AddToCart from "./AddToCart";

export default function Catalog() {
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
