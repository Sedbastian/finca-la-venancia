import "./styles/Card.css";

export default function Card({ product, children }) {
  const { category, name, image, description, price, unit } = product;

  return (
    <li className="card">
      <div className="category">{category}</div>
      <div className="productName">{name}</div>
      <img src={image} alt="Producto" />
      <div className="description">{description}</div>
      <div className="price">
        ${price} cada {unit}
      </div>
      {children}
    </li>
  );
}
