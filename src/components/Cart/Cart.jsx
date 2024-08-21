import React, { useState, useEffect, useContext } from "react";
import { CartContext } from "../../context/cartContext";
import { initMercadoPago, Wallet } from '@mercadopago/sdk-react'
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import Swal from "sweetalert2";
import "./Cart.css";
import RemoveShoppingCartIcon from "@mui/icons-material/RemoveShoppingCart";
import Loader from "../Loader/Loader"
const BASE_URL = import.meta.env.VITE_REACT_BASE_URL;
const MPID = import.meta.env.VITE_REACT_MPID;

function CartItem(props) {
  
  return (
    <li className="cartItem_container">
      <img src={props.img} alt="imgProduct" />
      <h4>{props.name}</h4>
      <span>${props.price}</span>
      <div className="quantityInCart">
        <small>Cantidad: {props.quantity}</small>
        <button onClick={props.addToCart}>+</button>
      </div>
      <span className="removeCart" onClick={props.removeFromCart}><RemoveShoppingCartIcon /></span>
    </li>
  );
}

function Cart() {
  const { cart, removeFromCart, clearCart, addToCart, cartTotal } = useContext(CartContext);
  const [shipping, setShipping] = useState(120);
  const [preferenceId, setPreferenceId] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [orderData, setOrderData] = useState({ title: "Healthy Toys", price: cartTotal, quantity: 1 });
  initMercadoPago(`${MPID}`, { locale: 'es-AR' });

  const alertNoProducts = () => {
    return Swal.fire({
      position: "center",
      width: 400,
      icon: "warning",
      title: `No hay productos en el carrito para pagar`,
      showConfirmButton: true,
    });
  }

  const createPreference = () => {
    //return console.log(JSON.stringify(orderData))
    setIsLoading(true);
    fetch(`${BASE_URL}/mercadoPago/create_preference`, {
      method: "POST",
      body: JSON.stringify(orderData),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        return response.json();
      })
      .then((preference) => {
        setPreferenceId(preference.id);
      })
      .catch((error) => {
        console.error(error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };
  return (
    <main className="cart_container">
      <h1>Carrito de Compras</h1>
      <div className="buttons">
        <button onClick={clearCart}>Vaciar Carrito</button>
        <HashLink to="/e_commerce/#products_section">Seguir comprando</HashLink>
        <Link to="" onClick={() => {
          cartTotal > 0 ? createPreference() : alertNoProducts()
          }}>
          Ir a pagar
        </Link>
      </div>
      <div className="selectShipping">
            <label htmlFor="colorSelect">Opciones de Envio  </label>
            <select name="colorSelect" id="colorSelect">
              <option value="">Seleccione...</option>
              <option value="personalizado">Retiro en Healthy Toys</option>
              <option value="celeste_blanco">Correo Argentino</option>
            </select>
          </div>
      <h3>Productos: ${new Intl.NumberFormat().format(cartTotal)}</h3>
      <h3>Envio: ${new Intl.NumberFormat().format(shipping)}</h3>
      <h2>TOTAL: ${new Intl.NumberFormat().format(cartTotal + shipping)}</h2>
      {
        isLoading && <h4 id="loaderMP" className="loader">{<Loader />} Cargando Botón de Pago...</h4>
      }
      {preferenceId && (
        <div className="buttonMP">
          <Wallet
          initialization={{ preferenceId }}
        />
        </div>
      )}
      <ul>
        {cart.map((product) => {
          // setOrderData(product)
          return (
            <CartItem
              img={`${BASE_URL}/img/products/${product.image1}`}
              name={product.name}
              price={new Intl.NumberFormat().format(product.price)}
              quantity={product.quantity}
              addToCart={() => addToCart(product)}
              removeFromCart={() => removeFromCart(product)}
              key={product.id_product}
            />
          );
        })}
      </ul>
    </main>
  );
}

export default Cart;
