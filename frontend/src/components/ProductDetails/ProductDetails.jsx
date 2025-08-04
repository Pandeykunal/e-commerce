import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import "./ProductDetails.css";

const ProductDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        setLoading(true);
        const res = await axios.get(`${import.meta.env.VITE_API_URL}/api/products/${id}`);
        setProduct(res.data);
        setLoading(false);
      } catch (err) {
        setError("Failed to load product");
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  const handleDelete = async () => {
    const confirmDelete = window.confirm("Are you sure you want to delete this product?");
    if (!confirmDelete) return;

    try {
      await axios.delete(`${import.meta.env.VITE_API_URL}/api/products/${id}`);
      alert("Product deleted successfully");
      navigate("/"); // Redirect to home after deletion
    } catch (err) {
      alert("Error deleting product");
      console.error(err);
    }
  };

  const handleUpdate = () => {
    navigate(`/product/edit/${id}`); // ✅ match this with App.jsx
  };

  if (loading) return <p>Loading product details...</p>;
  if (error) return <p>{error}</p>;
  if (!product) return <p>No product found.</p>;

  return (
    <div>
      <div className="product-detail">
        <div className="image-section">
          {product.image ? (
            <img src={product.image} alt={product.title} />
          ) : (
            <p>No image available</p>
          )}
        </div>

        <div className="info-section">
          <h1>{product.title}</h1>
          <p><strong>Description:</strong> {product.description}</p>
          <p><strong>Category:</strong> {product.category}</p>
          <p><strong>Price:</strong> ₹{product.price}</p>

          <div className="actions">
            <button className="update-btn" onClick={handleUpdate}>UPDATE</button>
            <button className="delete-btn" onClick={handleDelete}>DELETE</button>
          </div>
        </div>
      </div>

      <div className="back-button-container">
        <button className="back-button" onClick={() => navigate("/")}>←</button>
      </div>
    </div>
  );
};

export default ProductDetails;
