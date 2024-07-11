import React, { useState } from 'react'
import SearchIcon from '@mui/icons-material/Search';
import './Filters.css'

function Filters({ setFilters, filters }) {
    
    const handleChangeMaxPrice = (event) => {
        setFilters(prevState => ({
            ...prevState, 
            maxPrice: event.target.value 
        }))
    }

    const handleChangeCategory = (event) => {
        setFilters(prevState => ({
            ...prevState, 
            category: event.target.value 
        }))
    }

    return (
        <section className='filters'>
            <article>
                <label htmlFor="price">Precio Máximo</label>
                <input
                 type="range"
                 id='price_range'
                 min='6000.00'
                 max='30000.00'
                 value={filters.maxPrice}
                 onChange={handleChangeMaxPrice}/>
                 <span>${filters.maxPrice}</span>
            </article>

            <article>
                <label htmlFor="category_select">Categoría</label>
                <select name="category_select" id="category_select" onChange={handleChangeCategory}>
                    <option value="all">Todas</option>
                    <option value="1">Vía Pública</option>
                    <option value="2">Hogar</option>
                    <option value="2">Profesional</option>
                </select>
            </article>
            <article id='search_section'>
                <label className='search_icon' htmlFor="search"><SearchIcon /></label>
                <input
                 type="text"
                 name='search'
                 />
            </article>
        </section>
    )
}

export default Filters
