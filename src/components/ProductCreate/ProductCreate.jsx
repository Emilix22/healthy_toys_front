import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import "../Register/Register.css";
import clearInputs from "../../services/clearInputs";
import Header from "../Header/Header";
const BASE_URL = import.meta.env.VITE_REACT_BASE_URL;

function ProductCreate() {
  return (
    <main className="register_container">
      <Header />
      <div className="formRegister_container">
        <form className="form" id="form_register">
          <p className="title_login">Agregar Producto al E-Commerce</p>
          {/* {errorsBack && errorsBack.userInDB ? (
            <span className="msg-error">{errorsBack.userInDB}</span>
          ) : (
            ""
          )} */}
          <div className="flex">
            <label>
              <input
                required
                type="text"
                name="name"
                className="input"
                // value={infoRegisterForm.name}
                // onChange={(e) =>
                //   setInfoRegisterForm({
                //     ...infoRegisterForm,
                //     name: e.target.value.toUpperCase(),
                //   })
                // }
                // onKeyUp={validations.name}
                // onBlur={validations.name}
              />
              <span>Nombre</span>
              {/* {errors && errors.name ? (
                <span className="msg-error">{errors.name}</span>
              ) : (
                ""
              )}
              {errorsBack && errorsBack.name ? (
                <span className="msg-error">{errorsBack.name.msg}</span>
              ) : (
                ""
              )} */}
            </label>

            <label>
              <input
                required
                type="text"
                name="category"
                className="input"
                // value={infoRegisterForm.category}
                // onChange={(e) =>
                //   setInfoRegisterForm({
                //     ...infoRegisterForm,
                //     category: e.target.value.toUpperCase(),
                //   })
                // }
                // onKeyUp={validations.category}
                // onBlur={validations.category}
              />
              <span>Categoría</span>
              {/* {errors && errors.surname ? (
                <span className="msg-error">{errors.surname}</span>
              ) : (
                ""
              )}
              {errorsBack && errorsBack.surname ? (
                <span className="msg-error">{errorsBack.surname.msg}</span>
              ) : (
                ""
              )} */}
            </label>
          </div>

          <label>
            <input
              required
              type="number"
              name="price"
              className="input"
              // value={infoRegisterForm.price}
              // onChange={(e) =>
              //   setInfoRegisterForm({
              //     ...infoRegisterForm,
              //     price: e.target.value,
              //   })
              // }
              // onKeyUp={validations.price}
              // onBlur={validations.price}
            />
            <span>Precio</span>
            {/* {errors && errors.email ? (
              <span className="msg-error">{errors.email}</span>
            ) : (
              ""
            )}
            {errorsBack && errorsBack.email ? (
              <span className="msg-error">{errorsBack.email.msg}</span>
            ) : (
              ""
            )} */}
          </label>

          <label>
            <input
              required
              type="text"
              name="description"
              className="input"
              // value={infoRegisterForm.description}
              // onChange={(e) =>
              //   setInfoRegisterForm({
              //     ...infoRegisterForm,
              //     description: e.target.value,
              //   })
              // }
            />
            <span>Descripción</span>

            {/* {errorsBack && errorsBack.password ? (
              <span className="msg-error">{errorsBack.password.msg}</span>
            ) : (
              ""
            )} */}
          </label>

          <label>
            <input
              required
              type="text"
              name="image"
              className="input"
              // value={infoRegisterForm.image}
              // onChange={(e) =>
              //   setInfoRegisterForm({
              //     ...infoRegisterForm,
              //     image: e.target.value,
              //   })
              // }
            />
            <span>Imagen</span>

            {/* {errorsBack && errorsBack.password ? (
              <span className="msg-error">{errorsBack.password.msg}</span>
            ) : (
              ""
            )} */}
          </label>

          <label>
            <input
              required
              type="number"
              name="quantity"
              className="input"
              // value={infoRegisterForm.quantity}
              // onChange={(e) =>
              //   setInfoRegisterForm({
              //     ...infoRegisterForm,
              //     quantity: e.target.value,
              //   })
              // }
            />
            <span>Cantidad Stock</span>

            {/* {errorsBack && errorsBack.password ? (
              <span className="msg-error">{errorsBack.password.msg}</span>
            ) : (
              ""
            )} */}
          </label>

          <label>
            <input
              required
              type="text"
              name="promotion"
              className="input"
              // value={infoRegisterForm.promotion}
              // onChange={(e) =>
              //   setInfoRegisterForm({
              //     ...infoRegisterForm,
              //     promotion: e.target.value,
              //   })
              // }
            />
            <span>En Promo?</span>

            {/* {errorsBack && errorsBack.password ? (
              <span className="msg-error">{errorsBack.password.msg}</span>
            ) : (
              ""
            )} */}
          </label>
          
          <button className="submit" /*onClick={handleRegister}*/>
            Crear Producto
          </button>
        </form>
      </div>
    </main>
  )
}

export default ProductCreate
