import React from 'react'
import "./Header.css"
import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import logo from "../../assets/healtyToys_logo.svg"
import MenuIcon from '@mui/icons-material/Menu';
import scrollHeader from '../../services/scrollHeader';



function Header() {
  scrollHeader()
  return (
    <header>
        <img src={logo} alt="logo" />
        <span className='hambMenu'><MenuIcon /></span>
        <nav>
          <HashLink smooth to="/#top" /*className="active"*/>Inicio</HashLink>
          <HashLink smooth to="/#products_section">Productos</HashLink>
          <HashLink smooth to="/#contacts">Contactos</HashLink>
          <Link to="#">Sobre Nosotros</Link>
        </nav>
        <ul>
            <Link to="#">User</Link>
            <Link to="#"><ShoppingCartIcon /></Link>
            <Link to="#"><FavoriteBorderIcon /></Link>
        </ul>
      </header>
  )
}

export default Header
