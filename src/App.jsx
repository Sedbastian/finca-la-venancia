import "./App.css";
import { Outlet } from "react-router-dom";
import { Fragment } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <Fragment>
      <Header />
      <Outlet />
      <Footer />
    </Fragment>
  );
}

export default App;
