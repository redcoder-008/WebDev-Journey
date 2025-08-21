const express = require("express");
const app = express();

app.listen(8080,()=>{
    console.log("Listening on port 8080");
});

app.get("/",(req,res)=>{
    res.send("hello world")
});

//middleware 
// app.use(()=>{
//     console.log("YOur first middleware")
// });
app.use((req,res)=>{
    console.log("Middleware");
    res.send("OK");
})
app.get("/random",(req,res)=>{
    res.send("Random page");
})