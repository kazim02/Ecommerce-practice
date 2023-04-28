import React from "react";
import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import Header from "./components/Header/Header";

const App = () => {
  return (
    <>
      <BrowserRouter>
      <Header/>
        <Routes>
          
          {/* <Route path="/" element={ < />} /> */}
        </Routes>
      </BrowserRouter> 
    </>
  );
};

export default App;
