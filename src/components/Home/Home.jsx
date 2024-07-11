import React from 'react'
import "./Home.css";
import Carrousel from "../Carrousel/Carrousel";
import ProductsList from '../ProductsList/ProductsList';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';


function Home() {
  return (
    <>
      <Header />
      <Carrousel />
      <ProductsList />
      <Footer />   
    </>
  )
}

export default Home
