 const express = require("express");
 const app= express();
 const port = 8080;

 app.listen(port,()=>{
    console.log(`Listening on port ${port}`);
 })
app.use(express.urlencoded({extended:true}));
 app.get("/register" , (req,res)=>{
    let {user,password} = req.query;
    res.send(`Standard GET response. Welcome ${user}!`);
 })
 app.post("/register" , (req,res)=>{
    let {user,pass} = req.body;

    res.send(`Standard POST response. Welcome MR ${user}`);
 })

