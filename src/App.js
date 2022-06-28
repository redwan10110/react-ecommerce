import React from "react";
import { Route, Routes } from "react-router-dom";
import Authentication from "./Routes/Authentication/Authentication";
import Home from "./Routes/Home/Home";
import Navigation from "./Routes/Navigation/Navigation";
import Shop from "./Routes/Shop/Shop";



function App() {
  
  return (
    <>
    
    <Routes>
      <Route path="/" element={<Navigation></Navigation>}>
        <Route index element={<Home></Home>}></Route>
        <Route path="shop" element={<Shop></Shop>}></Route>
        <Route path="authentication" element={<Authentication></Authentication>}></Route>
      </Route>
    </Routes>
    
    
    </>

    
  );
}

export default App;
