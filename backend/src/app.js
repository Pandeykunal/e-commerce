const express = require("express");
const productRouter = require("./routes/product.router");
const userRouter = require("./routes/user.router");
const cartRouter = require("./routes/cart.router"); 
require("dotenv").config();

const morgan = require("morgan");
const cors = require("cors");

const app = express();

// ✅ Fixed CORS - allows all origins for development
app.use(cors());

// If you want to specify your frontend URL instead, use:
// app.use(cors({
//     origin: "http://localhost:3000"  // Replace with your frontend port
// }));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan("dev"));

console.log(process.env.MONGO_URI);

// API Routes
app.use("/api/products", productRouter);
app.use("/api/users", userRouter);
app.use("/api/cart", cartRouter);

module.exports = app;