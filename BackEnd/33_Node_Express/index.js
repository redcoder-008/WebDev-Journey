const express = require("express");
const app = express();
console.dir(app);

let port = 8080;

app.listen(port,()=>{
    console.log(`app listening on port ${port}`)
});

// app.use((req,res)=>{
//     console.log("New Request received");
//     // res.send("This is basic response");
//     let code = "<h1>Karan Kumar Kamat</h1>"
//     // res.send(code);
// });

app.get("/",(req,res)=>{
    res.send("you choosed root path");
});
app.get("/apple",(req,res)=>{
    res.send("apple is red in color");
});
app.get("/banana",(req,res)=>{
    res.send("banana is yellow in color");
});