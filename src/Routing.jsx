import React from "react";
import { Route, Routes } from "react-router";
import Home from "./user/Home";
import AboutUs from "./user/AboutUs";
import Product from "./user/Product";

const Routing = () => {
  return (
        <>
            <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/about" element={<AboutUs/>}/>
                    <Route path="/product" element={<Product/>}/>
            </Routes>
    </>
  );
};

export default Routing;
