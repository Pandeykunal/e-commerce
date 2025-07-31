
import React from "react";
import "./App.css";

import UserNavbar from "./components/userPage/UserNavBar";
import UserHome from "./components/userPage/UserHome";
import UserProductDetails from "./components/userPage/UserProductDetail";
import UserAddToCart from "./components/userPage/UserAddToCart";
import Login from "./components/Login/Login";

import { Routes, Route } from "react-router-dom";

const AppUser = () => {
  return (
    <div>
      <UserNavbar />
      <Routes>
        <Route path="/" element={<UserHome />} />
        <Route path="/product/:id" element={<UserProductDetails />} />
        <Route path="/cart" element={<UserAddToCart />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
};

export default AppUser;