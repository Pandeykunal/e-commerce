const express=require("express")
const productModel =require("../models/product.model")
const { route } = require("./product.router")
const router =express.Router()


router.use((req,res,next)=>{
    req.name="player"
    next()
})
router.get('/', async(req,res)=>{
    const products = await productModel.find()
    console.log("products: ", products);
    console.log(req.name);
    

    res.render("index", {products: products, title: "Home Page"})
})



module.exports=router