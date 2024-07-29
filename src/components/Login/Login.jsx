import React from "react";
import PasswordChecklist from "react-password-checklist";
import { Link } from "react-router-dom";
import "../Register/Register.css";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

function Login() {
  return (
    <main className="register_container">
      <Header />
      <div className="formLogin_container">
      <form className="form" id="form_login">
            <p className="title_login">Inicio de Sesión</p>
            <p className="message">
              Bienvenid@ a <span>HEALTHY TOYS</span>
            </p>

            <label htmlFor="email">
              <input
                required
                type="email"
                name="email"
                className="input"
                // value={userEmail}
                // onChange={(e) => setUserEmail(e.target.value)}
              />
              <span>Email</span>
            </label>

            <label htmlFor="password">
              <input
                required
                type="password"
                name="password"
                className="input"
                // value={password}
                // onChange={(e) => setPassword(e.target.value)}
              />
              <span>Password</span>
            </label>
            <div className="remember_div">
              <input
                type="checkbox"
                name="rememberUser"
                title="rememberUser"
                // onChange={(e) => setRememberUser(e.target.value)}
              />
              <label className="message" htmlFor="rememberUser">
                Recordarme
              </label>
            </div>

            {/* {errorsBack ? <span className="msg-error">{errorsBack}</span> : ""} */}

            <button className="submit" /*onClick={handleLogin}*/>
              Iniciar sesión
            </button>
            <p className="signin">
              ¿No tienes cuenta?{" "}
              <a
                // onClick={() => {
                //   setLogReg(true), setErrorsBack("");
                // }}
              >
                Regístrate
              </a>
            </p>
            
          </form>
      </div>
      <Footer />
    </main>
  )
}

export default Login
