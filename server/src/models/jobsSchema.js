const mongoose=require("mongoose");
const jobSchema=new mongoose.Schema(
    {
        title:{type:String,require:true,lowercase:true},
        company:{type:String,required:true,lowercase:true},
        location:{type:String,required:true,lowercase:true},
        ctc:{type:Number,required:true},
        experience:{type:String,required:true,lowercase:true},
        type:{type:String,required:true,lowercase:true},
    }
)

const Jobs=mongoose.model("joblist",jobSchema);
module.exports=Jobs;