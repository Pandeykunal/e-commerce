import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Home.css";

const Home = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`${import.meta.env.VITE_API_URL}/api/products`);
        setProducts(res.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="home-container">
      <div className="product-list">
        {products.map((product) => (
          <Link
            to={`/product/${product._id}`}
            className="product-card"
            key={product._id}
          >
            <img src={product.image} alt={product.title} />
            <h3>{product.title}</h3>
            <p>
              <strong>Category:</strong> {product.category}
            </p>
            <p>
              <strong>Price:</strong> ₹{product.price}
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Home;
