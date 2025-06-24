const express = require("express");
const app = express();
console.dir(app);

let port = 3000;

app.listen(port,()=>{
    console.log(`app listening on port ${port}`)
});

app.use((req,res)=>{
    console.log("New Request received");
    // res.send("This is basic response");
    let code = "<h1>Karan Kumar Kamat</h1>"
    res.send(code);
});