import React from 'react'
import "./Home.css";
import Carrousel from "../Carrousel/Carrousel";
import ProductsList from '../ProductsList/ProductsList';


function Home() {
  return (
    <>
      <Carrousel />
      <ProductsList />   
    </>
  )
}

export default Home
