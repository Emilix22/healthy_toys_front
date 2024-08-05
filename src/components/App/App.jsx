import { Route, Routes } from "react-router-dom";
import { AppContextProvider } from "../../context/appContext";
import { RegisterContextProvider } from "../../context/registerContext";
import { LoginContextProvider } from "../../context/loginContext";
import { ProductContextProvider } from "../../context/productContext";
import Home from "../Home/Home";
import SelectSite from "../SelectSite/SelectSite";
import Register from "../Register/Register";
import Login from "../Login/Login";
import Cart from "../Cart/Cart";
import ProductCreate from "../ProductCreate/ProductCreate";

function App() {
  return (
    <AppContextProvider>
      <Routes>
        <Route path="/" element={<SelectSite />} />
        <Route path="/e_commerce" element={<Home />} />
        <Route path="/e_commerce/register" element={<RegisterContextProvider><Register /></RegisterContextProvider>} />
        <Route path="/e_commerce/login" element={<LoginContextProvider><Login /></LoginContextProvider>} />
        <Route path="/e_commerce/cart" element={<Cart />} />
        <Route path="/e_commerce/product/create" element={<ProductContextProvider><ProductCreate /></ProductContextProvider>} />
      </Routes>
    </AppContextProvider>
  );
}

export default App;
