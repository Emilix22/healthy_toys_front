import React from "react";
import "./SelectSite.css";
import { Link } from "react-router-dom";
import logo from "../../assets/logoHT.svg";
import YoutubeIcon from "@mui/icons-material/Youtube";
import StoreIcon from "@mui/icons-material/Store";

function SelectSite() {
  return (
    <main className="select_site_container">
      <video autoPlay muted loop id="myVideo">
        <source src="background_video.mp4" type="video/mp4" />
      </video>
      <section className="select">
        <Link id="linkTutorials" to="https://www.youtube.com/@HealthyToys">
          <span>TUTORIALES</span> <YoutubeIcon fontSize="inherit" />
        </Link>
        <div className="logoHello">
          <img src={logo} alt="logo" />
          <h1>Bienvenid@s!</h1>
        </div>
        <Link id="linkEcommerce" to="/e_commerce">
          <span>TIENDA</span> <StoreIcon fontSize="inherit" />
        </Link>
      </section>
    </main>
  );
}

export default SelectSite;
