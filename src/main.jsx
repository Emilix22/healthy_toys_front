import React from "react";
import { AppContextProvider } from "../src/context/appContext";
import { CartContextProvider } from "../src/context/cartContext";
import ReactDOM from "react-dom/client";
import App from "./components/App/App";
import "./index.css";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <AppContextProvider>
      <CartContextProvider>
        <App />
      </CartContextProvider>
    </AppContextProvider>
  </BrowserRouter>
);
