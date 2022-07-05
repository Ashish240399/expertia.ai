const mongoose=require("mongoose");
const validator=require("validator");
const bcrypt=require("bcryptjs")
const userSchema=new mongoose.Schema(
    {
        name:{type:String,required:true},
        email:{type:String,required:true,unique:true,validate(value){
            if(!validator.isEmail(value)){
                return error;
            }
        }},
        password:{type:String,required:true},
        phone:{type:String,required:true},
        tokens:[{
            type:String,required:false
        }],
        applied_job:[{type:mongoose.Schema.Types.ObjectId,ref:"joblist",required:false}]
    }
)
userSchema.pre("save",async function(next){
    this.password=await bcrypt.hash(this.password,10);
    next();
})
const User=mongoose.model("user",userSchema);
module.exports=User;