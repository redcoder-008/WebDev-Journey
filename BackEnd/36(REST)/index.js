const express = require("express");
const app = express();
const path = require("path");
const port =8080;
app.set("views", path.join(__dirname,"views"));
app.use(express.urlencoded({extended:true}));
app.set("view engine","ejs");
app.set(express.static(path.join(__dirname,"public")));
app.listen(port, ()=>{
    console.log(`Listening on port ${port}`);
})
// app.set("public",path.join(__dirname,"public")); 

app.get("/",(req,res)=>{
    res.send("Port is working");
})
// rest api