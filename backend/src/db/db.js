const mongoose=require("mongoose")

const connect=()=>{
    mongoose.connect("mongodb://localhost:27017/VIPS")
    .then(()=>{
        console.log("Connected to MongoDB")
    })
    .catch((err)=>{
        console.log("Error connecting to MongoDB")
    })
}

module.exports=connect;