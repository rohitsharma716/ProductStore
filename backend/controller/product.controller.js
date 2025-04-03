import Product from "../models/products.model.js";
import mongoose from "mongoose";

export const getProducts = async (req , res)=>{

    try{
           const products = await Product.find({});
           res.status(200).json({success: true, data:products})
    }catch(error){
           console.log("error in getting products:", error.message);
           res.status(500).json({message:"server error"})
    }
}  

export const createProduct = async (req , res)=>{        
    const product =  req.body;
    
    if(!product.name || !product.price || !product.image){
        res.status(400).json({success: false , message:"fill all feilds"})
    }
    const newProduct = await Product(product);

    try{
          await newProduct.save();
          res.status(201).json({success: true ,data:  newProduct});
    }catch(error){
          console.log("error: ",  error.message);
          res.status(500).json({sucess: false, message:"server error"})
    }
}

export const deleteProduct = async (req , res)=>{
    const id = req.params.id;

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({sucess: false, message:"Product not found"})
 }
     
    try{
          const product = await Product.findByIdAndDelete(id);
          res.status(200).json({success: true , data: product});
    }catch(error){       
          console.log("error: ",  error.message);
          res.status(500).json({sucess: false, message:"Product not found"})
    }
}

export const updatedProduct = async (req,res)=>{
    const id = req.params.id;
    const product = req.body;

    if(!mongoose.Types.ObjectId.isValid(id)){
           return res.status(404).json({sucess: false, message:"Product not found"})
    }

    try{
          const updatedProduct = await Product.findByIdAndUpdate(id,product,{new: true});
          res.status(200).json({sucess: true, data: updatedProduct});

    }catch(error){
          console.log("error in updating product:", error.message);
          res.status(500).json({message:"server error"})
    }
}