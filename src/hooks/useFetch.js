
const handleRegister = (event) => {
  event.preventDefault();

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
          setInfoRegisterForm(infoRegisterFormDefault);
          clearInputs();
          setLogReg(false);
          history("/");
        }
      }
    })
    .catch((error) => {
      console.log(error);
    });
};