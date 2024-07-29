import React from "react";
import "./Home.css";
import Carrousel from "../Carrousel/Carrousel";
import ProductsList from "../ProductsList/ProductsList";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import buttonUp from "../../services/buttonUp";
import { HashLink } from "react-router-hash-link";

function Home() {
  buttonUp();
  return (
    <main className="home_container">
      <span className="buttonUp">
        <HashLink smooth to="/e_commerce/#up">
          subir
        </HashLink>
      </span>
      <Header />
      <Carrousel />
      <ProductsList />
      <Footer />
    </main>
  );
}

export default Home;
