import React, { useContext, useEffect, useState } from "react";
import { ProductContext } from "../../context/productContext";
import { CartContext } from "../../context/cartContext";
import Loader from "../Loader/Loader"
import "./ProductsList.css";
import ProductCard from "../ProductCard/ProductCard";
import Filters from "../Filters/Filters";
const BASE_URL = import.meta.env.VITE_REACT_BASE_URL;

import img_2 from "../../assets/img2.jpg";
import img_1 from "../../assets/img1.jpg";
import img_3 from "../../assets/img3.jpg";

function ProductsList() {
  const {
    loading,
    getAllProducts,
    products,
  } = useContext(ProductContext);

  const {
    cart,
  } = useContext(CartContext);
  
  const [filters, setFilters] = useState({
    category: "all",
    maxPrice: 30000,
  });

  const filterProducts = (products) => {
    return products.filter((product) => {
      return (
        product.price <= Number(filters.maxPrice) &&
        (filters.category == "all" || product.category_id == filters.category)
      );
    });
  };

  const checkProductInCart = product => {
    return cart.some(item => item.id_product === product.id_product)   
  }

  useEffect(() => {
    getAllProducts()
  },[])

  return (
    <section id="products_section">
      <h1 className="title_section">NUESTROS PRODUCTOS</h1>
      <Filters setFilters={setFilters} filters={filters} />
      <section className="productslist">
        {products ? (
          products.map((product) => {
            const isProductInCart = checkProductInCart(product)
            return (
              <ProductCard
                img={`${BASE_URL}/img/products/${product.image}`}
                productName={product.name}
                category={product.categories.name}
                description={product.description}
                price={new Intl.NumberFormat().format(product.price)}
                prod={product}
                prodInCart = {isProductInCart}
                key={product.id_product}
              />
            );
          })
        ) : loading ? (
          <span className="loader">{<Loader />} Cargando...</span>
        ) : (
          ""
        )}
      </section>
    </section>
  );
}

export default ProductsList;
