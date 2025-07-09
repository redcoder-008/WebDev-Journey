const express = require("express");
const app = express();
const path = require("path");
const port =8080;
let posts = [

    {
        username:"redcoder",
        content: "I am 5star coder"
    },
    {
        username:"Karan",
        content:"I am a senior software engineer"
    }
];
app.set("views", path.join(__dirname,"views"));
app.use(express.urlencoded({extended:true}));
app.set("view engine","ejs");
app.use(express.static(path.join(__dirname,"public")));
app.listen(port, ()=>{
    console.log(`Listening on port ${port}`);
})
// app.set("public",path.join(__dirname,"public")); 

app.get("/posts",(req,res)=>{
    // res.send("Port is working");
    res.render("index.ejs",{posts});

})
// rest api

