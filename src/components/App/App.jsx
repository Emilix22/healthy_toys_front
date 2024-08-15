import React, { useContext, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { AppContext } from "../../context/appContext";
// import { AppContextProvider } from "../../context/appContext";
import { RegisterContextProvider } from "../../context/registerContext";
import { LoginContextProvider } from "../../context/loginContext";
import { ProductContextProvider } from "../../context/productContext";
import Cookies from "js-cookie";
import Home from "../Home/Home";
import SelectSite from "../SelectSite/SelectSite";
import Register from "../Register/Register";
import Login from "../Login/Login";
import Cart from "../Cart/Cart";
import ProductCreate from "../ProductCreate/ProductCreate";
import ProductDetail from "../ProductDetail/ProductDetail";

function App() {
  const { user, getUserData, userData, setUser } = useContext(AppContext);
  // const userLogin = Cookies.get("userLogin")

  // useEffect(() => {
  //   userLogin && setUser(JSON.parse(userLogin))
  // }, [])

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
    </Routes>
  );
}

export default App;
