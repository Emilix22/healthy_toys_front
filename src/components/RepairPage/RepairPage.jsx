import React from 'react'
import logo from "../../assets/Healthy-Toys-Logo+text-22.png"
import cono from "../../assets/cone-svgrepo-com.svg"
import { Link } from "react-router-dom";
import "./RepairPage.css";

function RepairPage() {
  return (
    <main className='repairPage_container'>
  <header>
    <img src={logo} alt="logo" />
  </header>
  <section className='textSection'>
  <h1>Mejorando... <img src={cono} alt="cono" /></h1>
  <p>Estamos trabajando para mejorar nuestra tienda virtual, te pedimos disculpas por el inconveniente que esto te pueda ocasionar.
    Hasta tanto terminemos los trabajos de mantenimiento puedes hacer tu pedido o consulta a traves de nuestro Email: <Link to="mailto:consultas@healthytoys.online">consultas@healthytoys.online</Link>
   </p>
   <p>No olvides suscribirte a nuestro canal de Youtube <Link to="https://www.youtube.com/@HealthyToys">@HealthyToys</Link> para no perderte ningún ejercicios del plan de entrenamiento</p>
   <p>Puedes seguirnos en Instagram <Link to="https://www.instagram.com/bouncer.juego/">@bouncer.juego</Link></p>
   <h2>MUCHAS GRACIAS!</h2>
  </section>
  
</main>
  )
}

export default RepairPage
