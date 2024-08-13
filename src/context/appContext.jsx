import { useState, createContext } from "react";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";



export const AppContext = createContext();

export const AppContextProvider = ({ children }) => {

  const BASE_URL = import.meta.env.VITE_REACT_BASE_URL;

  const [user, setUser] = useState("");
  const [userData, setUserData] = useState("");
  const [errorsBack, setErrorsBack] = useState(); //errores back
  const history = useNavigate();

  const getUserData = async () => {
    const response = await fetch(`${BASE_URL}/users/dataLoged`, {
      method: "POST",
      body: JSON.stringify({
      }),
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${user.token}`,
      },
    });
    const info = await response.json();
    setUserData(info);
    //console.log(info)
  }

  const logout = (event) => {
    event.preventDefault();
    setUser(null);
    setUserData(null)
    // document.cookie.replace("");
    history("/");
  };

  return (
    <AppContext.Provider
      value={{
        user,
        userData,
        setUser,
        errorsBack,
        setErrorsBack,
        history,
        getUserData,
        logout,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
