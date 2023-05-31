import { createHashRouter, RouterProvider } from "react-router-dom";
import React from "react";

import "@testing-library/jest-dom";
import "@testing-library/jest-dom/extend-expect";
import userEvent from "@testing-library/user-event";
import { render, screen } from "@testing-library/react";

// Components
import App from "./App";
import ErrorPage from "./components/ErrorPage";
import Home from "./components/Home";
import Catalog from "./components/Catalog";
import Cart from "./components/Cart";
import Card from "./components/Card";
import AddToCart from "./components/AddToCart";
import products from "./components/products";

// Mocks
window.scrollTo = jest.fn();

jest.mock("./components/products", () => {
  const productsMock = new Map();

  productsMock.set("Nueces Peladas", {
    category: "Productos Principales",
    name: "Nueces Peladas",
    images: [],
    description: "Agroecológicas, criollas, mariposa",
    price: 2000,
    quantity: 1,
    unit: "kilo"
  });

  productsMock.set("Aceite de Oliva Virgen Extra", {
    category: "Productos Principales",
    name: "Aceite de Oliva Virgen Extra",
    images: [],
    description: "Variedades: Arauco, Arbequina, Manzanilla",
    quantity: 1,
    price: 2000,
    unit: "litro"
  });

  productsMock.set("Aceitunas Negras en Salmuera", {
    category: "Productos Principales",
    name: "Aceitunas Negras en Salmuera",
    images: [],
    description:
      "Aceitunas variedad Arauco, maduras, negras, agroecológicas en salmuera al 6%",
    quantity: 1,
    price: 1000,
    unit: "frasco de 1 kilo escurrido"
  });

  return productsMock;
});

describe("App component", () => {
  it("Matches snapshot", () => {
    const router = createHashRouter([
      {
        path: "/",
        element: <App />,
        errorElement: <ErrorPage />,
        children: [
          { index: true, element: <Home /> },
          {
            path: "catalog",
            element: <Catalog />
          },
          {
            path: "cart",
            element: <Cart />
          }
        ]
      }
    ]);

    const { container } = render(<RouterProvider router={router} />);
    expect(container).toMatchSnapshot();
  });
});

describe("Header component", () => {
  it("renders correct heading", () => {
    const router = createHashRouter([
      {
        path: "/",
        element: <App />,
        errorElement: <ErrorPage />,
        children: [
          { index: true, element: <Home /> },
          {
            path: "catalog",
            element: <Catalog />
          },
          {
            path: "cart",
            element: <Cart />
          }
        ]
      }
    ]);

    render(<RouterProvider router={router} />);

    expect(screen.getByRole("heading").textContent).toMatch(
      /finca agroecológica “la venancia”/i
    );
  });

  it("Links change location correctly", async () => {
    const router = createHashRouter([
      {
        path: "/",
        element: <App />,
        errorElement: <ErrorPage />,
        children: [
          { index: true, element: <Home /> },
          {
            path: "catalog",
            element: <Catalog />
          },
          {
            path: "cart",
            element: <Cart />
          }
        ]
      }
    ]);

    const user = userEvent.setup();

    render(<RouterProvider router={router} />);

    const headerCatalogLink = screen.getByRole("link", {
      name: "Catálogo"
    });
    await user.click(headerCatalogLink);
    expect(document.location.hash).toBe("#/catalog");

    const headerCartLink = screen.getByRole("link", { name: "Carrito" });
    await user.click(headerCartLink);
    expect(document.location.hash).toBe("#/cart");

    const headerHomeLink = screen.getByRole("link", { name: "Inicio" });
    await user.click(headerHomeLink);
    expect(document.location.hash).toBe("#/");
  });
});

describe("Home component", () => {
  it("Catalog Link changes location correctly and Home Link on Header returns to '#/'", async () => {
    const router = createHashRouter([
      {
        path: "/",
        element: <App />,
        errorElement: <ErrorPage />,
        children: [
          { index: true, element: <Home /> },
          {
            path: "catalog",
            element: <Catalog />
          },
          {
            path: "cart",
            element: <Cart />
          }
        ]
      }
    ]);

    const user = userEvent.setup();

    render(<RouterProvider router={router} />);

    const homeCatalogLink = screen.getByRole("link", {
      name: "Catálogo de Productos"
    });
    await user.click(homeCatalogLink);
    expect(document.location.hash).toBe("#/catalog");

    const homeLink = screen.getByRole("link", { name: "Inicio" });
    await user.click(homeLink);
    expect(document.location.hash).toBe("#/");
  });
});

describe("Footer component", () => {
  it("Links point to correct addresses", async () => {
    const router = createHashRouter([
      {
        path: "/",
        element: <App />,
        errorElement: <ErrorPage />,
        children: [
          { index: true, element: <Home /> },
          {
            path: "catalog",
            element: <Catalog />
          },
          {
            path: "cart",
            element: <Cart />
          }
        ]
      }
    ]);

    const user = userEvent.setup();

    render(<RouterProvider router={router} />);

    const sedbastianLink = screen.getByRole("link", {
      name: "Sedbastian"
    });
    expect(sedbastianLink.href).toBe("https://github.com/Sedbastian");

    const repoLink = screen.getByRole("link", { name: "githubRepo" });
    expect(repoLink.href).toBe("https://github.com/Sedbastian/shopping-cart");
  });
});

describe("Catalog component", () => {
  it("Shows correct number of products", () => {
    render(<Catalog />);

    const productsCards = screen.getAllByRole("listitem");

    expect(productsCards.length).toBe(products.size);

    productsCards.forEach(card => {
      const productName = card.querySelector(".productName");
      expect(products.has(productName.textContent)).toBe(true);
    });
  });
});

describe("AddToCart component", () => {
  it("Correctly displays input quantity when change quantity buttons are pressed", async () => {
    const user = userEvent.setup();

    render(<AddToCart name="Test product" quantityProp={8} />);

    const decrementQuantityButton = screen.getByRole("button", { name: "–" });
    const incrementQuantityButton = screen.getByRole("button", { name: "+" });
    const inputQuantity = screen.getByRole("spinbutton");

    await user.click(decrementQuantityButton);

    await user.click(incrementQuantityButton);
    await user.click(incrementQuantityButton);
    await user.click(incrementQuantityButton);
    await user.click(incrementQuantityButton);

    expect(inputQuantity.value).toBe("11");
  });

  it("Correctly adds className='notAddedQ' to AddToCart button when change quantity buttons are pressed", async () => {
    const user = userEvent.setup();

    render(<AddToCart name="Test product" quantityProp={8} />);

    const incrementQuantityButton = screen.getByRole("button", { name: "+" });
    const addToCartButton = screen.getByRole("button", {
      name: "Agregar al carrito"
    });

    await user.click(incrementQuantityButton);

    expect(addToCartButton.classList["1"]).toBe("notAddedQ");
  });
});

describe("System test", () => {
  it("Correctly adds products and show total amount", async () => {
    const router = createHashRouter([
      {
        path: "/",
        element: <App />,
        errorElement: <ErrorPage />,
        children: [
          {
            index: true,
            element: <Home />
          },
          {
            path: "catalog",
            element: <Catalog />
          },
          {
            path: "cart",
            element: <Cart />
          }
        ]
      }
    ]);

    const user = userEvent.setup();
    render(<RouterProvider router={router} />);

    // Go Home
    const homeLink = screen.getByRole("link", {
      name: "Inicio"
    });
    await user.click(homeLink);
    expect(document.location.hash).toBe("#/");

    // Go to Catalog
    const catalogButton = screen.getByRole("link", {
      name: "Catálogo de Productos"
    });
    await user.click(catalogButton);
    expect(document.location.hash).toBe("#/catalog");

    // Add to Cart 4 units of each product displayed
    const catalogList = screen.getAllByRole("listitem");
    catalogList.forEach(async card => {
      const addToCartButton = card.querySelector(".addToCart");
      await user.click(addToCartButton);
    });

    // Go to Cart
    const cartButton = screen.getByRole("link", {
      name: "Carrito"
    });
    await user.click(cartButton);
    expect(document.location.hash).toBe("#/cart");

    // cartLink shows correct number of added products
    expect(screen.getByTestId("cartQuantity").textContent).toBe("3");

    // cartTable shows correct totalAmomunt
    expect(screen.getByRole("generic", { name: "total" }).textContent).toBe(
      "$5000"
    );
  });
});
