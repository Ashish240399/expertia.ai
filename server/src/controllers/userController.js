const express=require("express");
const User = require("../models/userSchema");
const router=express.Router();
const bcrypt=require("bcryptjs")
router.post("/register",async(req,res)=>{
    try {
        const user=req.body;
        //console.log(user);
        const regEmail=await User.findOne({email:user.email}).lean().exec();
        console.log(regEmail);
        if(regEmail==null){
            const userData=await User.create(req.body);
            return res.status(200).send(userData);
        }
        else{
            return res.send("email already exists")
        }
    } catch (error) {
        return res.send(error)
    }
})
router.post("/login",async(req,res)=>{
    try {
        const email=req.body.email;
        const password=req.body.password;
        //console.log(password)
        const user=await User.findOne({email:email});
        //console.log(user)
        const isMatch=await bcrypt.compare(password,user.password);
        console.log(isMatch);
        if(isMatch){
            return res.status(200).json(user)
        }
        else{
            return res.status(400).send("Invalid user")
        }
        
    } catch (error) {
        return res.send(error)
    }
})
router.get("/",async(req,res)=>{
    try {
        const user=await User.find().lean().exec();
        return res.send(user)
    } catch (error) {
        return res.send(error)
    }
})
router.get("/:email",async(req,res)=>{
    try {
        const email=req.params.email;
        console.log(email);
        const user=await User.findOne({email:req.params.email}).lean().exec();
        return res.send(user)
    } catch (error) {
        return res.send(error)
    }
})
router.get("/:id/by-Id",async(req,res)=>{
    try {
        
        const user=await User.find({_id:req.params.id}).lean().exec();
        return res.send(user)
    } catch (error) {
        return res.send(error)
    }
})
router.post("/:id/job_apply",async(req,res)=>{
    try {
        const job=req.body;
        console.log(job)
        //const user=await User.updateOne({_id:req.params.id},{$push:{applied_job:{job}}});
        //return res.send(user)
    } catch (error) {
        
    }
})
module.exports=router;