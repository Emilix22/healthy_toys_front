import { useContext, useState, createContext } from "react";
import { AppContext } from "./appContext";
import { useNavigate } from "react-router-dom";

export const LoginContext = createContext();

export const LoginContextProvider = ({ children }) => {

  const {
    setUser,
    getUserData,
  } = useContext(AppContext);

  const BASE_URL = import.meta.env.VITE_REACT_BASE_URL;

  const [errorsBack, setErrorsBack] = useState(); //errores back

  const history = useNavigate();

  const [userEmail, setUserEmail] = useState();
  const [password, setPassword] = useState("");
  const [rememberUser, setRememberUser] = useState();
  const [loading, setLoading] = useState(false);

  const handleLogin = (event) => {
    event.preventDefault();
    setLoading(true)
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
        //console.log(info)
        {
          if (info.error) {
            setErrorsBack(info.error);
          } else {
            setUser(info);
            setUserEmail("");
            setPassword("");

            // if (rememberUser) {
            //   document.cookie = `userLogin=${JSON.stringify(info)}; expires=7`
            // }
            history("/e_commerce");
          }
        }
      })
      .finally(() => {setLoading(false)})
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <LoginContext.Provider
      value={{
        errorsBack,
        setErrorsBack,
        userEmail,
        setUserEmail,
        password,
        setPassword,
        setRememberUser,
        rememberUser,
        handleLogin,
        loading,
      }}
    >
      {children}
    </LoginContext.Provider>
  );
}