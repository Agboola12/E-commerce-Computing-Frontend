import React from "react";
import { Route, Routes } from "react-router";
import Home from "./user/Home";
import AboutUs from "./user/AboutUs";
import Product from "./user/Product";
import ProductReview from "./user/ProductReview";
import ProductDetail from "./user/ProductDetail";

const Routing = () => {
  return (
        <>
            <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/about" element={<AboutUs/>}/>
                    <Route path="/product" element={<Product/>}/>
                    <Route path="/review" element={<ProductReview/>}/>
                    <Route path="/product-detail" element={<ProductDetail/>}/>
            </Routes>
    </>
  );
};

export default Routing;
