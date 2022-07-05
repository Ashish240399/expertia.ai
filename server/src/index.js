const express=require("express");
const cors=require("cors");
const connectDB = require("./config/db");
const jobsController=require("../src/controllers/jobsController");
const app=express();
app.use(express.json());
app.use(cors());

app.use("/jobs",jobsController)
app.listen(5000,async()=>{
    try {
        await connectDB();
        console.log("connected")
    } catch (error) {
        console.log(error)
    }
})