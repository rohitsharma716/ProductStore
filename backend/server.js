import express from 'express'
import connectDB from "./config/db.js"
import Router from "./routes/product.route.js"


const app =  express();
app.use(express.json());


app.get('/', (req,res)=>{
       res.json({message:"hello world"})
})

app.use("/api/products", Router);

app.listen(5000,  ()=>{
       connectDB()
       console.log("server is running on port no  : 5000")
})