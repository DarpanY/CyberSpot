const express = require("express")
const cors = require("cors")
const mongoose = require("mongoose")

const app = express()

app.use(cors())
app.use(express.json())

mongoose.connect("mongodb://127.0.0.1:27017/cybershop")
.then(()=>console.log("MongoDB Connected"))
.catch(err=>console.log(err))

const Product = mongoose.model("Product",{
  name:String,
  price:Number,
  category:String,
  image:String,
  description:String
})

app.get("/products", async (req,res)=>{
  const data = await Product.find()
  res.json(data)
})

app.post("/products", async (req,res)=>{
  const product = new Product(req.body)
  await product.save()
  res.json(product)
})

app.delete("/products/:id", async (req,res)=>{
  await Product.findByIdAndDelete(req.params.id)
  res.json({message:"Deleted"})
})

app.listen(5000,()=>{
  console.log("Server running on port 5000")
})