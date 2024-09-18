import React, { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import Swal from "sweetalert2";
import Loader from "../Loader/Loader";
import { CartContext } from "../../context/cartContext";
import { AppContext } from "../../context/appContext";
import Header from "../Header/Header";
import "./ProductDetail.css";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import RemoveShoppingCartIcon from "@mui/icons-material/RemoveShoppingCart";

function ProductDetail() {
  const { addToCart, removeFromCart, cart, color, setColor } = useContext(CartContext);
  const { user, userPhone, setUserPhone } = useContext(AppContext);
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(false);
  const { id } = useParams();
  const BASE_URL = import.meta.env.VITE_REACT_BASE_URL;
  
  const checkProductInCart = (product) => {
    return cart.some((item) => item.id_product === product.id_product);
  };

  const isProductInCart = checkProductInCart(product);

  const alertNoLogin = () => {
    return Swal.fire({
      position: "center",
      width: 450,
      icon: "info",
      title: `Por favor inicia sesión para poder comprar`,
      html: `Inicia sesión 👉 <a href="/e_commerce/login">Iniciar Sesión</a><br>Registrate si no tenes cuenta 👉 <a href="/e_commerce/register">Registrarse</a>`,
      showConfirmButton: true,
    });
  }

  const alertNoColor = () => {
    return Swal.fire({
      position: "center",
      width: 400,
      icon: "info",
      title: `Por favor selecciona el color de tu preferencia`,
      showConfirmButton: true,
    });
  }

  useEffect(() => {
    setLoading(true);
    fetch(`${BASE_URL}/products/detail/${id}`)
      .then((res) => res.json())
      .then((info) => {
        setProduct(info.data);
      })
      .catch((error) => console.log(error));
    setLoading(false);
  }, []);
  return (
    <main className="detail-container">
      <Header />
      {loading ? <span className="loader">{<Loader />} Cargando...</span> : ""}
      <h1 className="title">{product.name}</h1>
      <h3 className="subTitle">{product.categories && product.categories.name}</h3>
      <span className="price">
        Precio: ${new Intl.NumberFormat().format(product.price)}
      </span>

      <section className="productDetail">
        <aside className="imagesDetail">
          <figure>
            <img
            src={`${BASE_URL}/img/products/${product.image1}`}
            alt="image-product"
          />
          </figure>
          <figure>
            <img
            src={`${BASE_URL}/img/products/${product.image2}`}
            alt="image-product"
          />
          </figure>
          <figure>
            <img
            src={`${BASE_URL}/img/products/${product.image3}`}
            alt="image-product"
          />
          </figure>
          <figure>
            <img
            src={`${BASE_URL}/img/products/${product.image4}`}
            alt="image-product"
          />
          </figure>
        </aside>
        <aside className="productText">
          <p>Descripción: {product.description}</p>
          <div className="selectColor">
            <label htmlFor="colorSelect">Colores Disponibles  </label>
            <select
             name="colorSelect" 
             id="colorSelect" 
             value={color} 
             onChange={(e) => setColor(e.target.value)}
            >
              <option value="no_select">Seleccione...</option>
              <option value="personalizado">Personalizado</option>
              <option value="azul">Azul</option>
              <option value="blanco">Blanco</option>
              <option value="celeste">Celeste</option>
              <option value="negro">Negro</option>
              <option value="rojo">Rojo</option>
              <option value="verde">Verde</option>
            </select>
            {
              color === "personalizado" && (
                <div className="persoMessaje">
              <label>Al finalizar la compra te contactaremos via Email por los detalles de la personalización de tu BOUNCER</label>
            </div>
              )
            }
          </div>
          
          <div className="add_cart">
            {isProductInCart ? (
              <button
                className="cart_icon"
                id="removeCart"
                onClick={() => removeFromCart(product)}
              >
                Eliminar del Carrito <RemoveShoppingCartIcon />
              </button>
            ) : (
              <button className="cart_icon" onClick={() => !user ? alertNoLogin() : color === "no_select" ? alertNoColor() : addToCart(product) }>
                Agregar al Carrito <AddShoppingCartIcon />
              </button>
            )}
          </div>
        </aside>
      </section>

      <article className="product-detail"></article>
    </main>
  );
}

export default ProductDetail;
