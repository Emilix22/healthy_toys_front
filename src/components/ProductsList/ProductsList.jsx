import React, {useState} from 'react'
import "./ProductsList.css"
import ProductCard from '../ProductCard/ProductCard'
import Filters from '../Filters/Filters'

import img_2 from "../../assets/img2.jpg"
import img_1 from "../../assets/img1.jpg"
import img_3 from "../../assets/img3.jpg"

function ProductsList() {

  const [filters, setFilters] = useState({
    category : 'all',
    maxPrice: 30000
  })


const filterProducts = (products) => {
    return products.filter(product => {
        return (
            product.price <= Number(filters.maxPrice) && 
            (
                filters.category == 'all' ||
                product.category_id == filters.category
            )
        )
    })
}

  return (
    <section id='products_section'>
      <h1 className='title_section'>NUESTROS PRODUCTOS</h1>
      <Filters setFilters={setFilters} filters={filters} />
      <section  className='productslist'>
      <ProductCard
         img={img_3} 
         productName={"Bouncer"}
         category={"Hogar"}
         description={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque quisquam sapiente soluta magnam temporibus facilis. Fugiat pariatur nihil, repellendus numquam iste libero maxime perferendis quisquam tenetur similique adipisci. Autem, magni!"}
         price={"20.000"}
         />
        <ProductCard
         img={img_2} 
         productName={"Rollingball"}
         category={"Vía Pública"}
         description={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque quisquam sapiente soluta magnam temporibus facilis. Fugiat pariatur nihil, repellendus numquam iste libero maxime perferendis quisquam tenetur similique adipisci. Autem, magni!"}
         price={"15.000"}
         />
        <ProductCard
         img={img_1} 
         productName={"Dominator"}
         category={"Hogar"}
         description={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque quisquam sapiente soluta magnam temporibus facilis. Fugiat pariatur nihil, repellendus numquam iste libero maxime perferendis quisquam tenetur similique adipisci. Autem, magni!"}
         price={"10.500"}
         />
         <ProductCard
         img={img_3} 
         productName={"Bouncer"}
         category={"Profesional"}
         description={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque quisquam sapiente soluta magnam temporibus facilis. Fugiat pariatur nihil, repellendus numquam iste libero maxime perferendis quisquam tenetur similique adipisci. Autem, magni!"}
         price={"20.000"}
         />
        <ProductCard
         img={img_2} 
         productName={"Rollingball"}
         category={"Vía Pública"}
         description={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque quisquam sapiente soluta magnam temporibus facilis. Fugiat pariatur nihil, repellendus numquam iste libero maxime perferendis quisquam tenetur similique adipisci. Autem, magni!"}
         price={"15.000"}
         />
        <ProductCard
         img={img_1} 
         productName={"Dominator"}
         category={"Hogar"}
         description={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque quisquam sapiente soluta magnam temporibus facilis. Fugiat pariatur nihil, repellendus numquam iste libero maxime perferendis quisquam tenetur similique adipisci. Autem, magni!"}
         price={"10.500"}
         />
      </section>
      
    </section>
  )
}

export default ProductsList
