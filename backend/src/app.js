const express = require("express");
const productRouter = require("./routes/product.router");
const userRouter = require("./routes/user.router");
const cartRouter = require("./routes/cart.router"); 
require("dotenv").config()

const morgan = require("morgan");
const cors = require("cors");

const app = express();

app.use(cors({
    origin:" "       // url of frontend server",
})); // ✅ Allow cross-origin requests from frontend
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan("dev"));

console.log(process.env.MONGODB_URI)

app.use("/api/products", productRouter);
app.use("/api/users", userRouter);
app.use("/api/cart", cartRouter);

module.exports = app;
