const express=require("express");
const cors=require("cors");
const connectDB = require("./config/db");
const port=process.env.PORT || 5000
const jobsController=require("../src/controllers/jobsController");
const userController=require("../src/controllers/userController")
const app=express();
app.use(express.json());
app.use(cors());
app.use("/jobs",jobsController)
app.use("/users",userController);
app.listen(port,async()=>{
    try {
        await connectDB();
        console.log("connected",port)
    } catch (error) {
        console.log(error)
    }
})