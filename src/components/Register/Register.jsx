import React, { useEffect, useState } from "react";
import PasswordChecklist from "react-password-checklist";
import { Link } from "react-router-dom";
import "./Register.css";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
const BASE_URL = import.meta.env.VITE_REACT_BASE_URL;

function Register() {

  /***************************************pasar a useFetch************************************** */

  const [errors, setErrors] = useState(); // errores front
  const [errorsBack, setErrorsBack] = useState(); //errores back

  const [infoRegisterForm, setInfoRegisterForm] = useState(
    {
    name: "",
    surname: "",
    dni: "",
    email: "",
    password: "",
    avatar: "",
    }
  );

  const formData = new FormData();

  formData.append("name", infoRegisterForm.name);
  formData.append("surname", infoRegisterForm.surname);
  formData.append("dni", infoRegisterForm.dni);
  formData.append("email", infoRegisterForm.email);
  formData.append("password", infoRegisterForm.password);
  formData.append("avatar", infoRegisterForm.avatar);

  const handleRegister = (event) => {
    event.preventDefault();
  
    fetch(`${BASE_URL}/users/create`, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((info) => {
       return console.log(info);
        {
          if (info.error) {
            setErrorsBack(info.error);
          } else {
            Swal.fire({
              position: "center",
              width: 400,
              icon: "success",
              title: `Usuario ${infoRegisterForm.name} ${infoRegisterForm.surname} registrado correctamente!`,
              showConfirmButton: false,
              timer: 2500,
            });
            setInfoRegisterForm(infoRegisterFormDefault);
            //clearInputs();
            //history("/");
          }
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const expressions = {
    name: /^[a-zA-ZÀ-ÿ\s]{2,60}$/,
    surname: /^[a-zA-ZÀ-ÿ\s]{2,60}$/,
    dni: /^\d{8,8}$/,
    email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
  };

  const validations = {
    name: () => {
      if (
        expressions.name.test(infoRegisterForm.name) &&
        infoRegisterForm.name != ""
      ) {
        setErrors({ ...errors, name: "" });
      } else {
        setErrors({
          ...errors,
          name: "Requerido - sólo letras, entre 2 y 60 caracteres",
        });
      }
    },
    surname: () => {
      if (
        expressions.surname.test(infoRegisterForm.surname) &&
        infoRegisterForm.surname != ""
      ) {
        setErrors({ ...errors, surname: "" });
      } else {
        setErrors({
          ...errors,
          surname: "Requerido - sólo letras, entre 2 y 60 caracteres",
        });
      }
    },
    dni: () => {
      if (
        expressions.dni.test(infoRegisterForm.dni) &&
        infoRegisterForm.dni != ""
      ) {
        setErrors({ ...errors, dni: "" });
      } else {
        setErrors({ ...errors, dni: "Requerido - sólo números, 8 caracteres" });
      }
    },
    email: () => {
      if (
        expressions.email.test(infoRegisterForm.email) &&
        infoRegisterForm.email != ""
      ) {
        setErrors({ ...errors, email: "" });
      } else {
        setErrors({ ...errors, email: "Requerido - sólo formato de email" });
      }
    },
  };

  // useEffect(() => {
  //   setErrorsBack("");
  // }, [])
  /************************************************************************************************ */
  
  return (
    <main className="register_container">
      <Header />
      <div className="formRegister_container">
        <form className="form" id="form_register">
          <p className="title_login">Formulario de Registro</p>
          <p className="message">
            Regístrate ahora y obtén el mejor entrenamiento!
          </p>
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
                value={infoRegisterForm.name}
                onChange={(e) =>
                  setInfoRegisterForm({
                    ...infoRegisterForm,
                    name: e.target.value,
                  })
                }
                onKeyUp={validations.name}
                onBlur={validations.name}
              />
              <span>Nombre</span>
              {errors && errors.name ? (
                  <span className="msg-error">{errors.name}</span>
                ) : (
                  ""
                )}
                {errorsBack && errorsBack.name ? (
                  <span className="msg-error">{errorsBack.name.msg}</span>
                ) : (
                  ""
                )}
            </label>

            <label>
              <input
                required
                type="text"
                name="surname"
                className="input"
                value={infoRegisterForm.surname}
                onChange={(e) =>
                  setInfoRegisterForm({
                    ...infoRegisterForm,
                    surname: e.target.value,
                  })
                }
                onKeyUp={validations.surname}
                onBlur={validations.surname}
              />
              <span>Apellido</span>
              {errors && errors.surname ? (
                  <span className="msg-error">{errors.surname}</span>
                ) : (
                  ""
                )}
                {errorsBack && errorsBack.surname ? (
                  <span className="msg-error">{errorsBack.surname.msg}</span>
                ) : (
                  ""
                )}
            </label>
          </div>

          <label>
            <input
              required
              type="text"
              name="dni"
              className="input"
              value={infoRegisterForm.dni}
              onChange={(e) =>
                setInfoRegisterForm({
                  ...infoRegisterForm,
                  dni: e.target.value,
                })
              }
              onKeyUp={validations.dni}
              onBlur={validations.dni}
            />
            <span>DNI</span>
            {errors && errors.dni ? (
                <span className="msg-error">{errors.dni}</span>
              ) : (
                ""
              )}
              {errorsBack && errorsBack.dni ? (
                <span className="msg-error">{errorsBack.dni.msg}</span>
              ) : (
                ""
              )}
          </label>

          <label>
            <input
              required
              type="email"
              name="email"
              className="input"
              value={infoRegisterForm.email}
              onChange={(e) =>
                setInfoRegisterForm({
                  ...infoRegisterForm,
                  email: e.target.value,
                })
              }
              onKeyUp={validations.email}
              onBlur={validations.email}
            />
            <span>Email</span>
            {errors && errors.email ? (
                <span className="msg-error">{errors.email}</span>
              ) : (
                ""
              )}
              {errorsBack && errorsBack.email ? (
                <span className="msg-error">{errorsBack.email.msg}</span>
              ) : (
                ""
              )}
          </label>

          <label>
            <input
              required
              type="password"
              name="password"
              className="input"
              value={infoRegisterForm.password}
              onChange={(e) =>
                setInfoRegisterForm({
                  ...infoRegisterForm,
                  password: e.target.value,
                })
              }
            />
            <span>Password</span>

            {errorsBack && errorsBack.password ? (
                <span className="msg-error">{errorsBack.password.msg}</span>
              ) : (
                ""
              )}
          </label>
          <span>
            <i>
              <small>Reglas para el password:</small>
            </i>
          </span>
          <PasswordChecklist
            className="listRules"
            rules={["minLength", "number", "capital", "lowercase", "maxLength"]}
            minLength={8}
            value={infoRegisterForm.password}
            messages={{
              minLength: "Mínimo 8 caracteres.",
              number: "Mínimo un número.",
              capital: "Mínimo una letra mayúscula.",
              lowercase: "Mínimo una letra minúscula.",
              maxLength: "Máximo 15 caracteres",
            }}
            hideIcon={true}
            validTextColor="#2fac28"
            invalidTextColor="grey"
          />
          <button className="submit" onClick={handleRegister}>
            Enviar
          </button>
          <p className="signin">
            ¿Ya tienes cuenta?{" "}
            <a
            // onClick={() => {
            //   setLogReg(false), setErrorsBack("");
            // }}
            >
              Inicia sesión
            </a>
          </p>
        </form>
      </div>
      <Footer />
    </main>
  );
}

export default Register;
