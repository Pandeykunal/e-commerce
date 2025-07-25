const express = require("express");
const productModel = require("../models/product.model");
const multer = require("multer");
const ImageKit = require("imagekit");
const router = express.Router();

const storage = multer.memoryStorage();
const upload = multer({ storage });

const imagekit = new ImageKit({
  publicKey: "your-public-key",
  privateKey: "your-private-key",
  urlEndpoint: "https://ik.imagekit.io/your-folder",
});

// Create product
router.post("/add", upload.single("image"), async (req, res) => {
  try {
    const { title, description, category, price } = req.body;

    const uploadedImage = await imagekit.upload({
      file: req.file.buffer,
      fileName: req.file.originalname,
    });

    const product = new productModel({
      title,
      description,
      category,
      price,
      image: uploadedImage.url,
    });

    await product.save();
    res.status(201).json({ message: "Product saved", product });
  } catch (err) {
    console.error("Error saving product:", err);
    res.status(500).json({ error: "Error uploading product" });
  }
});

// Get all products
router.get("/", async (req, res) => {
  try {
    const products = await productModel.find();
    res.json(products);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch products" });
  }
});

// Get product by ID
router.get("/:id", async (req, res) => {
  try {
    const product = await productModel.findById(req.params.id);
    if (!product) return res.status(404).json({ error: "Product not found" });

    res.json(product);
  } catch (err) {
    res.status(500).json({ error: "Error fetching product" });
  }
});

// Update product
router.put("/:id", upload.single("image"), async (req, res) => {
  try {
    const { title, description, category, price } = req.body;
    const updatedData = { title, description, category, price };

    if (req.file) {
      const uploadedImage = await imagekit.upload({
        file: req.file.buffer,
        fileName: req.file.originalname,
      });
      updatedData.image = uploadedImage.url;
    }

    const updated = await productModel.findByIdAndUpdate(req.params.id, updatedData, { new: true });
    res.json({ message: "Product updated", updated });
  } catch (err) {
    res.status(500).json({ error: "Error updating product" });
  }
});

// Delete product
router.delete("/:id", async (req, res) => {
  try {
    await productModel.findByIdAndDelete(req.params.id);
    res.json({ message: "Product deleted" });
  } catch (err) {
    res.status(500).json({ error: "Error deleting product" });
  }
});

module.exports = router;
