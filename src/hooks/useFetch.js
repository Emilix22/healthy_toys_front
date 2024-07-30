import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import clearInputs from "../services/clearInputs";
const BASE_URL = import.meta.env.VITE_REACT_BASE_URL;

const [errors, setErrors] = useState(); // errores front
const [errorsBack, setErrorsBack] = useState(); //errores back
const history = useNavigate();

const [infoRegisterForm, setInfoRegisterForm] = useState({
  name: "",
  surname: "",
  email: "",
  password: "",
});

const formData = new FormData();

formData.append("name", infoRegisterForm.name);
formData.append("surname", infoRegisterForm.surname);
formData.append("email", infoRegisterForm.email);
formData.append("password", infoRegisterForm.password);

const useFetch = (url, options) => {

  fetch(`${BASE_URL}/users/create`, {
    method: "POST",
    body: formData,
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
            title: `Usuario ${infoRegisterForm.name} ${infoRegisterForm.surname} registrado correctamente!`,
            showConfirmButton: false,
            timer: 2500,
          });
          setInfoRegisterForm({
            name: "",
            surname: "",
            email: "",
            password: "",
          });
          clearInputs();
          history("/e_commerce/login");
        }
      }
    })
    .catch((error) => {
      console.log(error);
    });
};
