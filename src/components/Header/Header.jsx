import React, { useContext } from "react";
import { AppContext } from "../../context/appContext";
import { CartContext } from "../../context/cartContext";
import "./Header.css";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import logo from "../../assets/logoHT.svg";
import scrollHeader from "../../services/scrollHeader";
import menuActive from "../../services/menuActive";

function Header() {
  const {
    user,
    logout,
    userData,
  } = useContext(AppContext);

  const {
    cartProductCount,
  } = useContext(CartContext);

  scrollHeader();

  return (
    <header id="headerPage">
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
          {/* <div className={`avatar_name ${isOpen && "open"}`}>       
            <div className="item">
                <span>{user.name+" "+user.surname}</span>
            </div>
            <div className="item">
              <img className="avatar" src={`http://localhost:3000/img/users/${user.avatar}`} alt="userAvatar" />
            </div>
          </div> */}
          </ul>
          :
          <ul>
          <Link to="/e_commerce/register" onClick={menuActive}>
            Registrarse
          </Link>
          <Link to="/e_commerce/login" onClick={menuActive}>Iniciar Sesión</Link>
        </ul>
        }
        {/* {
          userData && <span id="userWelcome">Bienvenid@ {userData.data.name}</span>
        } */}
          
        {
          userData && userData.data.privileges_id === 1 ? <Link to="/e_commerce/product/create" onClick={menuActive}>Crear Producto</Link> : ""
        }
          
      </nav>
      <Link className="cartIcon" to="/e_commerce/cart" onClick={menuActive}>
            <small className="cartNumber">{cartProductCount}</small><ShoppingCartIcon />
          </Link>
    </header>
  );
}

export default Header;
