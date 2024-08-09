import React, { useContext } from "react";
import { CartContext } from "../../context/cartContext";
import "./Cart.css";
import RemoveShoppingCartIcon from "@mui/icons-material/RemoveShoppingCart";
const BASE_URL = import.meta.env.VITE_REACT_BASE_URL;

function CartItem(props) {
  return (
    <li>
      <img src={props.img} alt="imgProduct" />
      <div>{props.name}</div>
      <div>${props.price}</div>
      <div>
        <small>Cantidad: {props.quantity}</small>
        <button onClick={props.addToCart}>+</button>
      </div>
      <button onClick={props.removeFromCart}>
        <RemoveShoppingCartIcon />
      </button>
    </li>
  );
}

function Cart() {
  const { cart, removeFromCart, clearCart, addToCart } = useContext(CartContext);
  return (
    <main className="cart_container">
      <h2>Carrito de Compras</h2>
      <button onClick={clearCart}>Vaciar Carrito</button>
      <ul>
        {
          cart.map((product) => {
            return <CartItem
            img={`${BASE_URL}/img/products/${product.image}`}
            name={product.name} 
            price={product.price} 
            quantity={product.quantity} 
            addToCart={()=>addToCart(product)}
            removeFromCart= {()=>removeFromCart(product)}
            key={product.id_product} 
            />
          })
        }
      </ul>
    </main>
  );
}

export default Cart;
