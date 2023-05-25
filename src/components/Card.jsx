import "./styles/Card.css";

export default function Card({ product, children }) {
  const { category, name, images, description, price, unit } = product;

  return (
    <li className="card">
      <div className="category">{category}</div>
      <div className="productName">{name}</div>
      <div className="imgCont">
        {images.map(image => {
          return <img key={image} src={image} alt="Producto" />;
        })}
      </div>
      <div className="description">{description}</div>
      <div className="price">
        ${price} cada {unit}
      </div>
      {children}
    </li>
  );
}
