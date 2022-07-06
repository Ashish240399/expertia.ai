const express=require("express");
const Jobs = require("../models/jobsSchema");
const router=express.Router();

router.post("",async(req,res)=>{
    try {
        const jobs=await Jobs.create(req.body);
        return res.send(jobs);
    } catch (error) {
        return res.send(error);
    }
});
router.get("",async(req,res)=>{
    try {
        const jobs=await Jobs.find().lean().exec();
        return res.send(jobs);
    } catch (error) {
        return res.send(error);
    }
});

module.exports=router;