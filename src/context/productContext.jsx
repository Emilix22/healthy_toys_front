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
    image1: "",
    image2: "",
    image3: "",
    image4: "",
    promotion: "",
  });

  const [errorsBack, setErrorsBack] = useState(); //errores back
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState([]);
  const history = useNavigate();

  const [filters, setFilters] = useState({
    category: "all",
    //maxPrice: 30000,
  });

  const filterProducts = (products) => {
    return products.filter((product) => {
      return (
        filters.category == "all" || product.category_id == filters.category
      );
    });
  };

  const productCreate = (event) => {
    event.preventDefault();

    const fd = new FormData()
    fd.append('name', infoProductForm.name)
    fd.append('category', infoProductForm.category)
    fd.append('price', infoProductForm.price)
    fd.append('description', infoProductForm.description)
    fd.append('quantity', infoProductForm.quantity)
    fd.append('image1', infoProductForm.image1)
    fd.append('image2', infoProductForm.image2)
    fd.append('image3', infoProductForm.image3)
    fd.append('image4', infoProductForm.image4)
    fd.append('promotion', infoProductForm.promotion)


    setLoading(true);

    fetch(`${BASE_URL}/products/create`, {
      method: "POST",
      body: fd,
      headers: {
        Authorization: `Bearer ${user.token}`,
      },
    })
      .then((res) => res.json())
      .then((info) => {
        //console.log(info);
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
              quantity: "",
              image1: "",
              image2: "",
              image3: "",
              image4: "",
              promotion: "",
            });
            clearInputs();
            history("/e_commerce");
          }
        }
      });
    setLoading(false).catch((error) => {
      console.log(error);
    });
  };

  const getAllProducts = () => {
    setLoading(true);
    fetch(`${BASE_URL}/products`)
      .then((res) => res.json())
      .then((info) => {
        //console.log(info.data)
        setProducts(filterProducts(info.data));
      });
    setLoading(false)
  };

  return (
    <ProductContext.Provider
      value={{
        infoProductForm,
        setInfoProductForm,
        errorsBack,
        setErrorsBack,
        productCreate,
        loading,
        getAllProducts,
        products,
        filters,
        setFilters,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};
