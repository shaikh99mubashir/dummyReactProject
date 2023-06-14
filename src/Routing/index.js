import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "../Screens/Login";
import Signup from "../Screens/Signup";
import Home from "../Screens/Home";
export const Routing = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="Signup" element={<Signup />} />
        <Route path="Home" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
};