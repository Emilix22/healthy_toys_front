import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Cookie from "js-cookie";
import "../Register/Register.css";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
const BASE_URL = import.meta.env.VITE_REACT_BASE_URL;

function Login() {

  const [userEmail, setUserEmail] = useState();
  const [password, setPassword] = useState("");
  const [user, setUser] = useState("");
  const [rememberUser, setRememberUser] = useState();
  const history = useNavigate();
  const [errorsBack, setErrorsBack] = useState(); //errores back

  const handleLogin = (event) => {
    event.preventDefault();

    fetch(`${BASE_URL}/users/login`, {
      method: "POST",
      body: JSON.stringify({
        email: userEmail,
        password: password,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((info) => {
        console.log(info)
        {
          if (info.error) {
            setErrorsBack(info.error);
          } else {
            setUser(info);
            setUserEmail("");
            setPassword("");

            if (rememberUser) {
            Cookie.set("userLogin", JSON.stringify(info), {
                expires: 7,
                secure: true,
                sameSite: "strict",
                path: "/e_commerce",
              });
            }
            history("/e_commerce");
          }
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    setErrorsBack("");
  }, []);

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
                value={userEmail}
                onChange={(e) => setUserEmail(e.target.value)}
              />
              <span>Email</span>
            </label>

            <label htmlFor="password">
              <input
                required
                type="password"
                name="password"
                className="input"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <span>Password</span>
            </label>
            <div className="remember_div">
              <input
                type="checkbox"
                name="rememberUser"
                title="rememberUser"
                onChange={(e) => setRememberUser(e.target.value)}
              />
              <label className="message" htmlFor="rememberUser">
                Recordarme
              </label>
            </div>

            {errorsBack ? <span className="msg-error">{errorsBack}</span> : ""}

            <button className="submit" onClick={handleLogin}>
              Iniciar sesión
            </button>
          </form>
      </div>
      <Footer />
    </main>
  )
}

export default Login
