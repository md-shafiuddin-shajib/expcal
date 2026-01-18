import React from "react";
import Index from "./pages/index";
import Notfound from "./pages/Notfound";
import { BrowserRouter, Route, Routes } from "react-router-dom";


const App = () => {
  return (
    <>
    
      <BrowserRouter>
      
        <Routes>
          <Route path="/" element={<Index/>}/>
          <Route path="*" element={<Notfound/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
