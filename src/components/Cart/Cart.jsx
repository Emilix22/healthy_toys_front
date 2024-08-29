import React, { useState, useEffect, useContext } from "react";
import { CartContext } from "../../context/cartContext";
import { HashLink } from "react-router-hash-link";
import Swal from "sweetalert2";
import "./Cart.css";
import RemoveShoppingCartIcon from "@mui/icons-material/RemoveShoppingCart";
const BASE_URL = import.meta.env.VITE_REACT_BASE_URL;

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
  const { cart, removeFromCart, clearCart, addToCart, cartTotal, shipping, setShipping, calculateShipping, orderCreate, errorsBack } = useContext(CartContext);
  const [shippingOption, setShippingOption] = useState("");

  const alertNoProducts = () => {
    return Swal.fire({
      position: "center",
      width: 400,
      icon: "warning",
      title: `No hay productos en el carrito para pagar`,
      showConfirmButton: true,
    });
  }

  const alertNoShipping = () => {
    return Swal.fire({
      position: "center",
      width: 400,
      icon: "warning",
      title: `Debe seleccionar una opción de envio`,
      showConfirmButton: true,
    });
  }

  useEffect(() => {
    shippingOption === "postOffice" 
    ? setShipping(500) 
    : shippingOption === "address" 
    ? setShipping(1000) 
    : setShipping(0)
  }, [shippingOption])
  
  return (
    <main className="cart_container">
      <h1>Carrito de Compras</h1>
      <div className="buttons">
        <button id="btn_clearCart" onClick={clearCart}>Vaciar Carrito</button>
        <HashLink to="/e_commerce/#products_section">Seguir comprando</HashLink>
        <button 
          id="btn_goPay"
          onClick={() => {
            if (cartTotal <= 0) {
              return alertNoProducts();
            } else if (!shippingOption) {
              return alertNoShipping();
            }
            return orderCreate();
          }}
        >
          Ir a pagar
        </button>
      </div>
      <div className="selectShipping">
        <label htmlFor="shippingSelect">Opciones de Envio </label>
        <select
          name="shippingSelect"
          id="shippingSelect"
          value={shippingOption}
          onChange={(e) => setShippingOption(e.target.value)}
        >
          <option value="">Seleccione...</option>
          <option value="postOffice">Envio a sucursal de Correo Argentino</option>
          <option value="address">Envio a domicilio</option>
        </select>
      </div>
      <h3>Productos: ${new Intl.NumberFormat().format(cartTotal)}</h3>
      <h3>Envio: ${shipping ? new Intl.NumberFormat().format(shipping) : 0}</h3>
      <h2>TOTAL: ${new Intl.NumberFormat().format(cartTotal + shipping)}</h2>
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
