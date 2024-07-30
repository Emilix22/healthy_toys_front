import { Route, Routes } from "react-router-dom";
import Home from "../Home/Home";
import SelectSite from "../SelectSite/SelectSite";
import Register from "../Register/Register";
import Login from "../Login/Login";


function App() {
  
  return (
    <>
      <Routes>

        <Route path="/" element={<SelectSite />} />  
        <Route path="/e_commerce" element={<Home />} />        
        <Route path="/e_commerce/register" element={<Register />} />  
        <Route path="/e_commerce/login" element={<Login />} />           
         
      </Routes>
      
    </>
  );
}

export default App;
