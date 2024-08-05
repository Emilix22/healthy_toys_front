import { useContext, useState, createContext } from "react";
import { AppContext } from "./appContext";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import clearInputs from "../services/clearInputs";

export const ProductContext = createContext();

export const ProductContextProvider = ({ children }) => {
  const BASE_URL = import.meta.env.VITE_REACT_BASE_URL;

  const { user } = useContext(AppContext);

  const [infoProductForm, setInfoProductForm] = useState({
    name: "",
    category: "",
    price: "",
    description: "",
    image: "",
    quantity: "",
    promotion: "",
  });
  const [errorsBack, setErrorsBack] = useState(); //errores back
  const history = useNavigate();

  const productCreate = (event) => {
    event.preventDefault();

    fetch(`${BASE_URL}/products/create`, {
      method: "POST",
      body: JSON.stringify({
        name: infoProductForm.name,
        category: infoProductForm.category,
        price: infoProductForm.price,
        description: infoProductForm.description,
        image: infoProductForm.image,
        quantity: infoProductForm.quantity,
        promotion: infoProductForm.promotion,
      }),
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${user.token}`,
      },
    })
      .then((res) => res.json())
      .then((info) => {
        console.log(info);
        {
          if (info.error) {
            setErrorsBack(info.error);
          } else {
            Swal.fire({
              position: "center",
              width: 400,
              icon: "success",
              title: `Producto ${infoProductForm.name} creado correctamente, con un Stock de ${infoProductForm.quantity}`,
              showConfirmButton: false,
              timer: 2500,
            });
            setInfoProductForm({
              name: "",
              category: "",
              price: "",
              description: "",
              image: "",
              quantity: "",
              promotion: "",
            });
            clearInputs();
            history("/e_commerce");
          }
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <ProductContext.Provider
      value={{
        infoProductForm,
        setInfoProductForm,
        errorsBack,
        setErrorsBack,
        productCreate,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};
