import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Routes/Home/Home";
import Login from "./Routes/Login/Login";
import Navigation from "./Routes/Navigation/Navigation";
import Shop from "./Routes/Shop/Shop";



function App() {
  
  return (
    <>
    
    <Routes>
      <Route path="/" element={<Navigation></Navigation>}>
        <Route index element={<Home></Home>}></Route>
        <Route path="shop" element={<Shop></Shop>}></Route>
        <Route path="login" element={<Login></Login>}></Route>
      </Route>
    </Routes>
    
    
    </>

    
  );
}

export default App;
