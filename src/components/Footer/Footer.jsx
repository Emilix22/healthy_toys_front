import React from "react";
import { Link } from "react-router-dom";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import EmailIcon from "@mui/icons-material/Email";
import YoutubeIcon from "@mui/icons-material/Youtube";
import logo from "../../assets/g24.svg";
import "./Footer.css";

function Footer() {
  return (
    <footer id="contacts">
      <section className="up_footer">
        <article className="articles_footer">
          <img className="logo_footer" src={logo} alt="logo" />
        </article>
        <article className="articles_footer">
          <h3>Oficinas</h3>
          <div className="contacts_footer">
            <p>Pasaje Iberá 48 CP(1834), Temperley Bs. As. Argentina</p>
          </div>
        </article>
        <article className="articles_footer">
          <h3>Contactos</h3>
          <div className="contacts_footer">
            <Link id="instagram" to="https://instagram.com" target="_blank">
              <InstagramIcon />
            </Link>
            <Link id="fscebook" to="https://facebook.com" target="_blank">
              <FacebookIcon />
            </Link>
            <Link id="youtube" to="https://youtube.com" target="_blank">
              <YoutubeIcon />
            </Link>
            <Link
              id="whatsap"
              to="#"
              target="_blank"
              onClick={(e) => {
                window.location.href = "https://wa.me/541136388857?text=Hola";
                e.preventDefault();
              }}
            >
              <WhatsAppIcon />
            </Link>
            <Link
              id="email"
              to="#"
              target="_blank"
              onClick={(e) => {
                window.location.href = "mailto:torresdragon@hotmail.com";
                e.preventDefault();
              }}
            >
              <EmailIcon />
            </Link>
          </div>
        </article>
      </section>

      <section className="down_footer">
        <p className="emilixWeb">
          Made with ❤️ by{" "}
          <Link id="emilixweb" to="https://emilixweb.com" target="_blank">
            EmilixWeb
          </Link>
          © 2024.
        </p>
      </section>
    </footer>
  );
}

export default Footer;
