import React, { useContext } from "react";
import { CartContext } from "../../context/cartContext";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import "./Cart.css";
import RemoveShoppingCartIcon from "@mui/icons-material/RemoveShoppingCart";
const BASE_URL = import.meta.env.VITE_REACT_BASE_URL;

function CartItem(props) {
  return (
    <li>
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
  return (
    <main className="cart_container">
      <h2>Carrito de Compras</h2>
      <div className="buttons">
      <button onClick={clearCart}>Vaciar Carrito</button>
      <HashLink to="/e_commerce/#products_section">Seguir comprando</HashLink>
      <Link to="">Ir a pagar</Link>
      </div>
      <h4>TOTAL: ${new Intl.NumberFormat().format(cartTotal)}</h4>
      <ul>
        {
          cart.map((product) => {
            return <CartItem
            img={`${BASE_URL}/img/products/${product.image1}`}
            name={product.name} 
            price={new Intl.NumberFormat().format(product.price)} 
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
