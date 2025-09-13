const express = require("express");
const app = express();

app.listen(8080, () => {
    console.log("Listening on port 8080");
});

app.get("/", (req, res) => {
    res.send("hello world")
});

//middleware 
// app.use(()=>{
//     console.log("YOur first middleware")
// });
// app.use((req,res,next)=>{
//      let {query} = req.query;
//     // console.log(query);
//     // console.log("Middleware");
//     res.send("OK");
//     next();
// })
//ready to go 

// app.use((req,res,next)=>{
//     req.date = new Date(Date.now()).toString(); //it creates current date
//     console.log(req.method,req.hostname,req.path,req.date);
//     next();

// });

const checkToken= (req, res, next) => {
    let { token } = req.query;
    if (token == "giveaccess") {

        // res.send("Data");
        // console.log("Data sent");
        next();
    }
    throw new Error("Access Denied"); //passing own message 
};
app.use("/api",checkToken,(req,res)=>{
    res.send("You have access to data");
});

app.use("/random", (req, res, next) => {
    console.log("I am only for random");
    next();
});
app.get("/err",(req,res)=>{
    abc==abc;
    res.send("Error page");
})
app.use("/err",(err,req,res,next)=>{

    console.log("------Error------");
    next();
})

app.get("/random", (req, res) => {

    res.send("Random page");
});
