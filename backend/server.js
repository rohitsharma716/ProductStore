import express from 'express'
import connectDB from "./config/db.js"


const app =  express();


app.listen(5000,  ()=>{
       connectDB()
       console.log("server is running on port no  : 5000")
})