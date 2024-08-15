import React, { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import Loader from "../Loader/Loader";
import { CartContext } from "../../context/cartContext";
import Header from "../Header/Header";
import "./ProductDetail.css";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import RemoveShoppingCartIcon from "@mui/icons-material/RemoveShoppingCart";

function ProductDetail() {
  const { addToCart, removeFromCart, cart } = useContext(CartContext);
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(false);
  const { id } = useParams();
  const BASE_URL = import.meta.env.VITE_REACT_BASE_URL;

  const checkProductInCart = (product) => {
    return cart.some((item) => item.id_product === product.id_product);
  };

  const isProductInCart = checkProductInCart(product);

  useEffect(() => {
    setLoading(true);
    fetch(`http://localhost:3000/products/detail/${id}`)
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
          <img
            src={`${BASE_URL}/img/products/${product.image1}`}
            alt="image-product"
          />
          <img
            src={`${BASE_URL}/img/products/${product.image2}`}
            alt="image-product"
          />
          <img
            src={`${BASE_URL}/img/products/${product.image3}`}
            alt="image-product"
          />
          <img
            src={`${BASE_URL}/img/products/${product.image4}`}
            alt="image-product"
          />
        </aside>
        <aside className="productText">
          <p>Descripción: {product.description}</p>
          <div className="selectColor">
            <label htmlFor="colorSelect">Colores Disponibles  </label>
            <select name="colorSelect" id="colorSelect">
              <option value="">Seleccione...</option>
              <option value="personalizado">Personalizado</option>
              <option value="celeste_blanco">Celeste y Blanco</option>
              <option value="naranja_blanco">Naranja y Blanco</option>
              <option value="rojo_blanco">Rojo y Blanco</option>
              <option value="azul_amarillo">Azul y Amarillo</option>
              <option value="azul_rojo">Azul y Rojo</option>
              <option value="verde_blanco">Verde y Blanco</option>
            </select>
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
              <button className="cart_icon" onClick={() => addToCart(product)}>
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
