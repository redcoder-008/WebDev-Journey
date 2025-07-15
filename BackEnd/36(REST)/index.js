const express = require("express");
const app = express();
const path = require("path");
const port =8080;
const { v4: uuidv4 } = require('uuid');
const methodOverride = require('method-override')
app.use(express.urlencoded({extended:true}));
app.use(methodOverride('_method'))

let posts = [

    {
        id:uuidv4(),
        username:"redcoder",
        content: "I am 5star coder"
    },
    {   id:uuidv4(),
        username:"Karan",
        content:"I am a senior software engineer"
    }
];
app.set("views", path.join(__dirname,"views"));
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
    let id = uuidv4();
    posts.push({id,username,content});
    
    res.redirect("/posts");

})
app.get("/posts/:id",(req,res)=>{
    const {id} = req.params;
    console.log({id});
    // res.send("Working");
    let post = posts.find((p)=> id ===p.id);
    res.render("show.ejs",{post});
})
app.get("/posts/:id/edit",(req,res)=>{
const {id} = req.params;
console.log(id);
let post = posts.find((p)=> id ===p.id);
res.render("edit.ejs",{post});
})
app.patch("/posts/:id",(req,res)=>{
    let {id}= req.params;
    let newContent = req.body.content;
    let post = posts.find((p)=> id === p.id);
    post.content = newContent;
    console.log(post);
    res.redirect("/posts");
    // res.send("hurray it's working");



});
