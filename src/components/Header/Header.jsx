import React, { useContext } from "react";
import { AppContext } from "../../context/appContext";
import "./Header.css";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import logo from "../../assets/logoHT.svg";
import scrollHeader from "../../services/scrollHeader";
import menuActive from "../../services/menuActive";

function Header() {
  const {
    user,
    logout,
  } = useContext(AppContext);
  scrollHeader();
  return (
    <header id="up">
      <img src={logo} alt="logo" />
      <button className="hambMenu" onClick={menuActive}>
        <span className="br1"></span>
        <span className="br2"></span>
        <span className="br3"></span>
      </button>
      <nav>
        <ul className="navLinks">
          <HashLink smooth to="/e_commerce/#top" onClick={menuActive}>
            Inicio
          </HashLink>
          <HashLink
            smooth
            to="/e_commerce/#products_section"
            onClick={menuActive}
          >
            Productos
          </HashLink>
          <HashLink smooth to="/e_commerce/#contacts" onClick={menuActive}>
            Contactos
          </HashLink>
          <Link to="#" onClick={menuActive}>
            Sobre Nosotros
          </Link>
        </ul>

        {
          user ?
          <ul>
          <Link to="#" onClick={logout}>Salir</Link>
          <Link to="/e_commerce/product/create" onClick={menuActive}>Crear Producto</Link>
          </ul>
          :
          <ul>
          <Link to="/e_commerce/register" onClick={menuActive}>
            Registrarse
          </Link>
          <Link to="/e_commerce/login" onClick={menuActive}>Iniciar Sesión</Link>
          <Link to="/e_commerce/cart" onClick={menuActive}>
            <ShoppingCartIcon />
          </Link>
        </ul>
    
        }
          
      </nav>
    </header>
  );
}

export default Header;
