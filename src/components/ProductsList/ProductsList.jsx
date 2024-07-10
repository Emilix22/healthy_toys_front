import React from 'react'
import "./ProductsList.css"
import ProductCard from '../ProductCard/ProductCard'

import img_2 from "../../assets/img2.jpg"
import img_1 from "../../assets/img1.jpg"
import img_3 from "../../assets/img3.jpg"

function ProductsList() {
  return (
    <section>
      <h1 className='title_section'>TODOS NUESTROS PRODUCTOS</h1>
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
