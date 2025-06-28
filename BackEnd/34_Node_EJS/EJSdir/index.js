const express = require("express");
const app = express();
 const port = 8080;
 const path = require("path");

 app.listen(port,()=>{
    console.log(`listening on port ${port}`);
 })

 app.set("view engine","ejs");
app.set("views", path.join(__dirname,"/views")); //can run file from parent folder

 app.get("/",(req,res)=>{
    res.render("home.ejs");

 });
 app.get("/hello",(req,res)=>{
    res.send("hellow");

 })

app.get("/rolldice",(req,res)=>{
   let diceVal = Math.floor(Math.random()*7);
   res.render("rolldice.ejs",{diceVal});
})