import React, { useContext, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { AppContext } from "../../context/appContext";
import { RegisterContextProvider } from "../../context/registerContext";
import { LoginContextProvider } from "../../context/loginContext";
import { ProductContextProvider } from "../../context/productContext";
import Home from "../Home/Home";
import SelectSite from "../SelectSite/SelectSite";
import Register from "../Register/Register";
import Login from "../Login/Login";
import Cart from "../Cart/Cart";
import ProductCreate from "../ProductCreate/ProductCreate";
import ProductDetail from "../ProductDetail/ProductDetail";
import Order from "../Order/Order";
import Success from "../Success/Success";
import CalcularEnvio from "../CalcularEnvio/CalcularEnvio";

function App() {
  const { user, getUserData, userData } = useContext(AppContext);

  useEffect(() => {
    user && getUserData();
  }, [user]);

  return (
    <Routes>
      <Route path="/" element={<SelectSite />} />
      <Route
        path="/e_commerce"
        element={
          <ProductContextProvider>
            <Home />
          </ProductContextProvider>
        }
      />
      <Route
        path="/e_commerce/register"
        element={
          <RegisterContextProvider>
            <Register />
          </RegisterContextProvider>
        }
      />
      <Route
        path="/e_commerce/login"
        element={
          <LoginContextProvider>
            <Login />
          </LoginContextProvider>
        }
      />
      <Route path="/e_commerce/cart" element={<Cart />} />
      <Route path="/e_commerce/order" element={<Order />} />
      <Route
        path="/e_commerce/product/create"
        element={
          userData && userData.data.privileges_id === 1 ? (
            <ProductContextProvider>
              <ProductCreate />
            </ProductContextProvider>
          ) : (
            <ProductContextProvider>
              <Home />
            </ProductContextProvider>
          )
        }
      />
      <Route
        path="/e_commerce/product/detail/:id"
        element={
          <ProductContextProvider>
            <ProductDetail />
          </ProductContextProvider>
        }
      />
      <Route path="/success" element={<Success />} />
      <Route path="/calcular_envio" element={<CalcularEnvio />} />
    </Routes>
  );
}

export default App;
