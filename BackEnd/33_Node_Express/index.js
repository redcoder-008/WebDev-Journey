const express = require("express");
const app = express();
// console.dir(app);

let port = 8080;

app.listen(port,()=>{
    console.log(`app listening on port ${port}`)
});
//  topic:-  sending a response 
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
// app.get("*",(req,res)=>{
//     res.send("Sahi location choose kar le");
// });


//   topic:- path parameter
app.get("/:username/:id", (req,res)=>{
    let {username,id}= (req.params);
    res.send(`welcome @${username}`);


});


//query string
app.get("/search",(req,res)=>{
    let {q}= req.query;
    if(!q){
        res.send("<h1>Nothing searched</h1>");
    }
    res.send(`<h1> Request send for ${q}</h1>`);
})


// About express, handling request,routing,queryString

