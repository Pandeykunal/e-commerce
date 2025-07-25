import React from "react";
import "./Navbar.css";

const Navbar = ({ onCartClick, onLoginClick }) => {
  return (
    <div className="navbar">
      <div className="left">
        <h2>Shopyyyy</h2>
      </div>

      <div className="search">
        <input type="text" placeholder="Search..." />
      </div>

      <div className="right">
        <i
          className="ri-shopping-cart-line"
          onClick={onCartClick}
          title="Open Product Form"
        ></i>
        <i
          className="ri-user-line"
          onClick={onLoginClick}
          title="Login"
        ></i>
      </div>
    </div>
  );
};

export default Navbar;
