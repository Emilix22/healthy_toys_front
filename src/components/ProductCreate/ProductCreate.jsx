import React, { useContext, useEffect, useState } from "react";
import { AppContext } from "../../context/appContext";
import { ProductContext } from "../../context/productContext";
import "./ProductCreate.css";

import Header from "../Header/Header";
const BASE_URL = import.meta.env.VITE_REACT_BASE_URL;

function ProductCreate() {
  const { user } = useContext(AppContext);
  const {
    infoProductForm,
    setInfoProductForm,
    errorsBack,
    productCreate,
    loading,
  } = useContext(ProductContext);

  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch(`${BASE_URL}/categories`, {
      method: "POST",
      body: JSON.stringify({}),
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${user.token}`,
      },
    })
      .then((res) => res.json())
      .then((info) => {
        //console.log(info)
        setCategories(info);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <main className="productCreate_container">
      <Header />
      <div className="formRegister_container">
        <form className="form" id="form_product_create">
          <p className="title_login">Agregar Producto al E-Commerce</p>
          {errorsBack && errorsBack.userInDB ? (
            <span className="msg-error">{errorsBack.userInDB}</span>
          ) : (
            ""
          )}
          <div className="flex">
            <label>
              <input
                required
                type="text"
                name="name"
                className="input"
                value={infoProductForm.name}
                onChange={(e) =>
                  setInfoProductForm({
                    ...infoProductForm,
                    name: e.target.value.toUpperCase(),
                  })
                }
                // onKeyUp={validations.name}
                // onBlur={validations.name}
              />
              <span>Nombre</span>
              {/* {errors && errors.name ? (
                <span className="msg-error">{errors.name}</span>
              ) : (
                ""
              )} */}
              {errorsBack && errorsBack.name ? (
                <span className="msg-error">{errorsBack.name.msg}</span>
              ) : (
                ""
              )}
            </label>

            <label>
              <select
                required
                name="category"
                className="input"
                value={infoProductForm.category}
                onChange={(e) =>
                  setInfoProductForm({
                    ...infoProductForm,
                    category: e.target.value.toUpperCase(),
                  })
                }
                // onKeyUp={validations.category}
                // onBlur={validations.category}
              >
                <option value=""></option>
                {categories.data &&
                  categories.data.map((cat) => {
                    return <option value={cat.id_category} key={cat.id_category}>{cat.name}</option>;
                  })}
              </select>
              <span>Categoría</span>
              {/* {errors && errors.category ? (
                <span className="msg-error">{errors.category}</span>
              ) : (
                ""
              )} */}
              {errorsBack && errorsBack.category ? (
                <span className="msg-error">{errorsBack.category.msg}</span>
              ) : (
                ""
              )}
            </label>
          </div>

          <label>
            <input
              required
              type="number"
              name="price"
              className="input"
              value={infoProductForm.price}
              onChange={(e) =>
                setInfoProductForm({
                  ...infoProductForm,
                  price: e.target.value,
                })
              }
              // onKeyUp={validations.price}
              // onBlur={validations.price}
            />
            <span>Precio</span>
            {/* {errors && errors.price ? (
              <span className="msg-error">{errors.price}</span>
            ) : (
              ""
            )} */}
            {errorsBack && errorsBack.price ? (
              <span className="msg-error">{errorsBack.price.msg}</span>
            ) : (
              ""
            )}
          </label>

          <label>
            <textarea
              required
              type="text"
              name="description"
              className="input"
              value={infoProductForm.description}
              onChange={(e) =>
                setInfoProductForm({
                  ...infoProductForm,
                  description: e.target.value,
                })
              }
            />
            <span>Descripción</span>

            {errorsBack && errorsBack.description ? (
              <span className="msg-error">{errorsBack.description.msg}</span>
            ) : (
              ""
            )}
          </label>

          <label>
            <span>Imagen</span>
          </label>
          <input
            type="file"
            name="image"
            className="input"
            onChange={(e) => setInfoProductForm({ ...infoProductForm, image: e.target.files[0]})}
          />

          {errorsBack && errorsBack.image ? (
              <span className="msg-error">{errorsBack.image.msg}</span>
            ) : (
              ""
            )}

          <div className="flex">
            <label>
              <input
                required
                type="number"
                name="quantity"
                className="input"
                value={infoProductForm.quantity}
                onChange={(e) =>
                  setInfoProductForm({
                    ...infoProductForm,
                    quantity: e.target.value,
                  })
                }
              />
              <span>Cantidad Stock</span>

              {errorsBack && errorsBack.quantity ? (
              <span className="msg-error">{errorsBack.quantity.msg}</span>
            ) : (
              ""
            )}
            </label>

            <label>
              <select
                required
                type="text"
                name="promotion"
                className="input"
                value={infoProductForm.promotion}
                onChange={(e) =>
                  setInfoProductForm({
                    ...infoProductForm,
                    promotion: e.target.value,
                  })
                }
              >
                <option value="no">NO</option>
                <option value="si">SI</option>
              </select>
              <span>En Promo?</span>

              {errorsBack && errorsBack.promotion ? (
              <span className="msg-error">{errorsBack.promotion.msg}</span>
            ) : (
              ""
            )}
            </label>
          </div>
          {loading ? <span className="loader">{<Loader />} Cargando...</span> : ""}
          <button className="submit" onClick={productCreate}>
            Crear Producto
          </button>
        </form>
      </div>
    </main>
  );
}

export default ProductCreate;
