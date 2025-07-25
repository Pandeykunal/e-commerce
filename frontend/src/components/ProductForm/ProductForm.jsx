import React, { useState } from "react";
import "./ProductForm.css";

const ProductForm = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState(null);
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const productData = {
      title,
      description,
      image,
      category,
      price
    };

    console.log("Submitted product:", productData);

    // You could send `productData` to a backend here
  };

  return (
    <div className="form-container">
      <h2>Add Product</h2>
      <form onSubmit={handleSubmit}>
        <label>Title</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />

        <label>Description</label>
        <input
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        />

        <label>Image</label>
        <input
          type="file"
          onChange={(e) => setImage(e.target.files[0])}
          required
        />

        <label>Category</label>
        <input
          type="text"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          required
        />

        <label>Price</label>
        <input
          type="number"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          required
        />

        <button type="submit">Add Product</button>
      </form>
    </div>
  );
};

export default ProductForm;
