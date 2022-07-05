const mongoose=require("mongoose");
const connectDB=()=>{
    mongoose.connect("mongodb+srv://Ashish7797:Ashish7797@cluster0.5r9kjoi.mongodb.net/?retryWrites=true&w=majority")
}

module.exports=connectDB;