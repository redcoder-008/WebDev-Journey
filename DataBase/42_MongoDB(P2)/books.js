 const mongoose = require("mongoose");
 main().then(()=>{
    console.log("connection success")
 }).catch((err)=>{
    console.log(err);
 });
 async function main(){
    await mongoose.connect("mongodb://127.0.0.1:27017/test");
    
 }

 const bookSchema = mongoose.Schema({
    title:{
        type:String,
        
    },
    author:{
        type:String,

    }
 })