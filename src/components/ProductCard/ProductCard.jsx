import React, { useState, useContext } from "react";
import "./ProductCard.css";
import { CartContext } from "../../context/cartContext";
import { Link } from "react-router-dom";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";


function ProductCard(props) {
  const { addToCart, removeFromCart } = useContext(CartContext);

  return (
    <Link to={`/e_commerce/product/detail/${props.id}`} className="product_card font-regular">
      <figure>
      <img src={props.img} alt="img_product" />
      </figure>
      <div className="title_category">
        <h3 className="title">{props.productName}</h3>
        <span className="category">{props.category}</span>
      </div>
      <p>{props.description}</p>
      <h3 className="price">${props.price}</h3>
      <div className="add_cart">
        {
          props.prodInCart 
          ? <span><ShoppingCartIcon /></span>
          : null
        }
      </div>
    </Link>
  );
}

export default ProductCard;
