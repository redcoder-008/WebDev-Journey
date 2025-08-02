 const mongoose = require("mongoose");
 main().then(()=>{
    console.log("connection success")
 }).catch((err)=>{
    console.log(err);
 });
 async function main(){
    await mongoose.connect("mongodb://127.0.0.1:27017/amazon");
    
 }

 const bookSchema = mongoose.Schema({
    title:{
        type:String,
        required:true,
    },
    author:{
        type:String,

    },
    price:{
        type:Number,
    }
 });
 const Book = mongoose.model("Book",bookSchema);

 let book1 = new Book({
    // title:"DSA",
    author:"KAran",
    price:242,
 })

 book1.save().then((res)=>{
    console.log(res);
 }).catch((err)=>{
    console.log("Some mistake");
    console.log(err);
 });