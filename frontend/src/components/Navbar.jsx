import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="left">
        <h2>Shopkart</h2>
      </div>

      <div className="search">
        <input type="text" placeholder="Search..." />
      </div>

      <div className="right">
        {/* Home Button */}
        <Link to="/" className="home-btn">Home</Link>

        {/* Switched: Styled Add to Cart Button (was icon before) */}
        <Link to="/product" className="add-cart-alt">Add Product</Link>

        {/* Switched: Icon version of second Add to Cart */}
        <Link to="/user-cart" title="Cart">
          <i className="ri-shopping-cart-line cart-icon-alt"></i>
        </Link>

        {/* Login Icon */}
        <Link to="/login" title="Login">
          <i className="ri-user-line"></i>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;  