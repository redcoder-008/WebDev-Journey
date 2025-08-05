const express = require("express");
const app = express();
const mongoose = require("mongoose");

app.listen(8080,()=>{
    console.log("Listening")
});

app.get("/",(req,res)=>{
    res.send("Root is working")
})

