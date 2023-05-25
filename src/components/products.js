import nueces from "./images/products/Nueces.jpg";
import nueces2 from "./images/products/Nueces2.jpg";
import aceite from "./images/products/Aceite.jpg";
import aceiteVidrio from "./images/products/AceiteVidrio.jpg";
import floresOlivo from "./images/products/FloresOlivo.jpg";
import arrope from "./images/products/ArropeDeUva.jpg";
import frascosAceitunas from "./images/products/FrascosAceitunas.jpg";
import naranjas from "./images/products/Naranjas.jpg";
import propoleo from "./images/products/Propoleo.jpg";
import propoleo2 from "./images/products/Cueva_arana.jpg";

const products = new Map();

products.set("Nueces Peladas", {
  category: "Productos Principales",
  name: "Nueces Peladas",
  images: [nueces, nueces2],
  description: "Agroecológicas, criollas, mariposa",
  price: 2000,
  quantity: 1,
  unit: "kilo"
});

products.set("Aceite de Oliva Virgen Extra", {
  category: "Productos Principales",
  name: "Aceite de Oliva Virgen Extra",
  images: [aceite, aceiteVidrio, floresOlivo],
  description: "Variedades: Arauco, Arbequina, Manzanilla",
  quantity: 1,
  price: 2000,
  unit: "litro"
});

products.set("Aceitunas Negras en Salmuera", {
  category: "Productos Principales",
  name: "Aceitunas Negras en Salmuera",
  images: [frascosAceitunas],
  description:
    "Aceitunas variedad Arauco, maduras, negras, agroecológicas en salmuera al 6%",
  quantity: 1,
  price: 1000,
  unit: "frasco de 1 kilo escurrido"
});

products.set("Jalea de Membrillo", {
  category: "Dulces",
  name: "Jalea de Membrillo",
  images: [arrope],
  description: "Ingredientes: Membrillos Agroecológicos, azucar, jugo de limón",
  quantity: 1,
  price: 1000,
  unit: "frasco de 330cc"
});

products.set("Naranjas", {
  category: "Frutas Frescas",
  name: "Naranjas",
  images: [naranjas],
  description: "Naranjas deliciosas agroecológicas",
  quantity: 1,
  price: 600,
  unit: "kilo"
});

products.set("Tintura de Propóleos", {
  category: "Tinturas",
  name: "Tintura de Propóleos",
  images: [propoleo, propoleo2],
  description: `Tintura Madre de Propóleos al 25%.

Composición: 25% Propóleo Crudo, 75% Alcohol Etílico.
Procedencia: Cerro Santa Ana, Misiones. RENAPA: n°0019`,
  quantity: 1,
  price: 600,
  unit: "gotero de 25ml"
});

export default products;
