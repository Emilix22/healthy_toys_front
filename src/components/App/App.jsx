import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "../Home/Home";
import SelectSite from "../SelectSite/SelectSite";


function App() {
  
  return (
    <>
      <Routes>
        <Route path="/" element={<SelectSite />} />  
        <Route path="/e_commerce" element={<Home />} />  
      </Routes>
      
    </>
  );
}

export default App;
