const express = require("express");
const app = express();
 const port = 8080;
 const path = require("path");

 app.use(express.static(path.join (__dirname,"Public")));
 app.use(express.static(path.join (__dirname,"Public/js")));

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

app.get("/ig/:username",(req,res)=>{
   const followers = ["karan","kumar","Kamat"];
   let {username} = req.params;
   let instadata = require("./data.json");
   let data = instadata[username];
   console.log(data);
   if(data){

      res.render("instagram.ejs", {data,followers});
   }else{
      res.render("error.ejs");
   }
})