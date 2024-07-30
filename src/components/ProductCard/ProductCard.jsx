import React from 'react'
import "./ProductCard.css"

import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';

function ProductCard(props) {
  return (
    <article className='product_card font-regular'>
      <img src={props.img} alt="img_product" />
      <div className='title_category'>
        <h3 className='title'>{props.productName}</h3>
        <span className='category'>{props.category}</span> 
      </div>
      <p>{props.description}</p>
      <h3 className='price'>${props.price}</h3>
      <div className='add_fav'>
        <AddShoppingCartIcon />
        <FavoriteBorderIcon />
      </div>
    </article>
  )
}

export default ProductCard
