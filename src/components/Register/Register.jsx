import React, { useContext, useEffect } from "react";
import { AppContext } from "../../context/appContext";
import { RegisterContext } from "../../context/registerContext";
import PasswordChecklist from "react-password-checklist";
import "./Register.css";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

function Register() {

  const {
    errors,
    setErrors,
  } = useContext(AppContext);

  const {
    errorsBack,
    setErrorsBack,
    infoRegisterForm,
    setInfoRegisterForm,
    handleRegister,
  } = useContext(RegisterContext);

  const expressions = {
    name: /^[a-zA-ZÀ-ÿ\s]{2,60}$/,
    surname: /^[a-zA-ZÀ-ÿ\s]{2,60}$/,
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

  useEffect(() => {
    setErrorsBack("");
  }, []);
  
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
                    name: e.target.value.toUpperCase(),
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
                    surname: e.target.value.toUpperCase(),
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
        </form>
      </div>
      <Footer />
    </main>
  );
}

export default Register;
