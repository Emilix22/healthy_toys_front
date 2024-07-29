

const expressions = {
  name: /^[a-zA-ZÀ-ÿ\s]{2,60}$/,
  surname: /^[a-zA-ZÀ-ÿ\s]{2,60}$/,
  dni: /^\d{8,8}$/,
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
  dni: () => {
    if (
      expressions.dni.test(infoRegisterForm.dni) &&
      infoRegisterForm.dni != ""
    ) {
      setErrors({ ...errors, dni: "" });
    } else {
      setErrors({ ...errors, dni: "Requerido - sólo números, 8 caracteres" });
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

export default validations;