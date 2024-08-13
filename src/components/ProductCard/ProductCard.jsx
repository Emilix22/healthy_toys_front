import React, {useContext} from "react";
import "./ProductCard.css";
import { CartContext } from "../../context/cartContext";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import RemoveShoppingCartIcon from "@mui/icons-material/RemoveShoppingCart";


function ProductCard(props) {
  const {
    addToCart,
    removeFromCart,
  } = useContext(CartContext);

  return (
    <article className="product_card font-regular">
      <img src={props.img} alt="img_product" />
      <div className="title_category">
        <h3 className="title">{props.productName}</h3>
        <span className="category">{props.category}</span>
      </div>
      <p>{props.description}</p>
      <h3 className="price">${props.price}</h3>
      {/* <div className="add_cart">
        {
          props.prodInCart 
          ? <span className="removeCart" onClick={() => removeFromCart(props.prod)}><RemoveShoppingCartIcon /></span>
          : <span onClick={() => addToCart(props.prod)}><AddShoppingCartIcon /></span>
        }
      </div> */}
    </article>
  );
}

export default ProductCard;
