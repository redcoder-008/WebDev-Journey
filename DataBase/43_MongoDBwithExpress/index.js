const express = require("express");
const app = express();
const mongoose = require("mongoose");
const path = require("path");
const Chat = require("./models/chat.js");

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");


main().then(() => {
    console.log("Connection successful");
}).catch(err => console.log(err));
async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/whatsapp');
}


app.listen(8080, () => {
    console.log("Listening")
});

app.get("/", (req, res) => {
    res.send("Root is working")
})

let chat1 = new Chat({
    from:"karan",
    to:"Kumar",
    message:"I am testing",
    createdAt:new Date()
})

chat1.save().then((res)=>{
    console.log(res);
}).catch((err)=>{
    console.log("kuch mmistake hai ");
})
