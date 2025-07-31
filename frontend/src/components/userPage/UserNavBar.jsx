import React from "react";
import "../Navbar.css";
import { Link, useNavigate } from "react-router-dom";

const UserNavbar = () => {
  const navigate = useNavigate();
  const isLoggedIn = !!localStorage.getItem("token");
  const username = localStorage.getItem("username");

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("username");
    alert("Logged out successfully!");
    navigate("/login");
  };

  return (
    <div className="navbar">
      <div className="left">
        <h2>Shopkart</h2>
      </div>

      <div className="search">
        <input type="text" placeholder="Search..." aria-label="Search" />
      </div>

      <div className="right">
        <Link to="/" className="home-btn">Home</Link>
        <Link to="/cart" title="Cart">
          <i className="ri-shopping-cart-line" aria-label="Cart"></i>
        </Link>

        {isLoggedIn ? (
          <>
            <span>Hi, {username}</span>
            <button onClick={handleLogout} className="logout-btn">Logout</button>
          </>
        ) : (
          <>
            <Link to="/login" title="Login">
              <i className="ri-user-line" aria-label="Login"></i>
            </Link>
            <Link to="/register" title="Register">
              <i className="ri-user-add-line" aria-label="Register"></i>
            </Link>
          </>
        )}
      </div>
    </div>
  );
};

export default UserNavbar;
