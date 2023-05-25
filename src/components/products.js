import nueces from "./images/products/nueces.jpg";
import aceite from "./images/products/nueces.jpg";

const products = new Map();

products.set("Nueces Peladas", {
  category: "Productos Principales",
  name: "Nueces Peladas",
  image: nueces,
  description: "Agroecológicas, criollas, mariposa",
  price: 2000,
  quantity: 1,
  unit: "kilo"
});

products.set("Aceite de Oliva Virgen Extra", {
  category: "Productos Principales",
  name: "Aceite de Oliva Virgen Extra",
  image: aceite,
  description: "Variedades: Arauco, Arbequina, Manzanilla",
  quantity: 1,
  price: 2000,
  unit: "litro"
});

products.set("Jalea de Membrillo", {
  category: "Dulces",
  name: "Jalea de Membrillo",
  image: aceite,
  description: "Ingredientes: Membrillos Agroecológicos, azucar, jugo de limón",
  quantity: 1,
  price: 1000,
  unit: "frasco de 330cc"
});

export default products;
