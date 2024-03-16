import React from "react";
import { Route, Routes } from "react-router";
import Home from "./user/Home";
import AboutUs from "./user/AboutUs";

const Routing = () => {
  return (
        <>
            <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/about" element={<AboutUs/>}/>
            </Routes>
    </>
  );
};

export default Routing;
