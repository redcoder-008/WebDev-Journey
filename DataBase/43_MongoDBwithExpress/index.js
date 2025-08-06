const express = require("express");
const app = express();
const mongoose = require("mongoose");
const path = require("path");
const Chat = require("./models/chat.js");

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));


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


app.get("/chats",async(req,res)=>{
 let chats =await Chat.find();
 console.log("Chat received");
 res.render("index.ejs",{chats});
})
console.log("")

//new chat 
app.get("/chats/new", (req,res)=>{
    // res.send("Create new chat")
    res.render("new.ejs");
})

app.post("/chats" ,(req,res)=>{
    res.send("form")

})