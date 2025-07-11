const express = require("express");
const app = express();
const path = require("path");
const port =8080;
let posts = [

    {
        id="1a",
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
app.get("/posts/new",(req,res)=>{

    res.render("new.ejs");
    
})

app.post("/posts",(req,res)=>{
    console.log("working (request received)");
    const{username,content} = req.body;
    posts.push({username,content});
    
    res.redirect("/posts");

})
app.get("/posts/id",(req,res)=>{
    const {id} = req.params;
    console.log({id});
    res.send("Working");
})
//index route, create new route.
// 📅 Day 46/100 – #100DaysOfCode
// ✅ Solved LeetCode #316 – Remove Duplicate Letters
// 💡 Learned about creating unique IDs and setting up the update route in Express.js — CRUD operations are starting to click!
// 🧩 Every concept adds to the bigger picture. One step closer to full-stack confidence!

// #100DaysOfCode #LeetCode #ExpressJS #JavaScript #WebDevelopment #CRUD #RESTAPI #BackendDev #CodingJourney #Consistency