import React, { useState, useEffect } from "react";
import SearchIcon from "@mui/icons-material/Search";
import "./Filters.css";
const BASE_URL = import.meta.env.VITE_REACT_BASE_URL;


function Filters({ setFilters, filters }) {
  const handleChangeMaxPrice = (event) => {
    setFilters((prevState) => ({
      ...prevState,
      maxPrice: event.target.value,
    }));
  };

  const handleChangeCategory = (event) => {
    setFilters((prevState) => ({
      ...prevState,
      category: event.target.value,
    }));
  };

  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch(`${BASE_URL}/categories`)
      .then((res) => res.json())
      .then((info) => {
        //console.log(info.data)
        setCategories(info);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <section className="filters">
      <article>
        <label htmlFor="category_select">Categoría</label>
        <select
          name="category_select"
          id="category_select"
          onChange={handleChangeCategory}
        >
          <option value="all">Todas</option>
                {categories.data &&
                  categories.data.map((cat) => {
                    return <option value={cat.id_category} key={cat.id_category}>{cat.name}</option>;
                  })}
        </select>
      </article>
      <article id="search_section">
        <label className="search_icon" htmlFor="search">
          <SearchIcon />
        </label>
        <input type="text" name="search" />
      </article>
    </section>
  );
}

export default Filters;
