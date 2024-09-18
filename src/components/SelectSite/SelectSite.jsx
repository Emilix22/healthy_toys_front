import React from "react";
import "./SelectSite.css";
import { Link } from "react-router-dom";
import logo from "../../assets/Healthy-Toys-Logo+text-22.png";
import YoutubeIcon from "@mui/icons-material/Youtube";
import StoreIcon from "@mui/icons-material/Store";

function SelectSite() {
  return (
    <main className="select_site_container">
      <video className="select_site_container__backVideo" autoPlay muted loop>
        <source src="background_video.mp4" type="video/mp4" />
      </video>
      <section className="select">
        <Link className="select__link select__linkTutorials" to="https://www.youtube.com/@HealthyToys">
          <span className="select__span">TUTORIALES</span> <YoutubeIcon fontSize="inherit" />
        </Link>
        <div className="logoHello">
          <img className="logoHello__img" src={logo} alt="logo Healthy toys"/>
          <h1 className="logoHello__welcome">Bienvenid@s!</h1>
        </div>
        <Link className="select__link select__linkEcommerce" to="/e_commerce">
          <span className="select__span">TIENDA</span> <StoreIcon fontSize="inherit" />
        </Link>
      </section>
    </main>
  );
}

export default SelectSite;
