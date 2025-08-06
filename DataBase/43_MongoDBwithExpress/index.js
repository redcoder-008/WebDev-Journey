const express = require("express");
const app = express();
const mongoose = require("mongoose");
const path = require("path");
const Chat = require("./models/chat.js");

app.set("views", path.join(__dirname, "views"));//to connect ejs file
app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));//it shows that from where css,js file is served
app.use(express.urlencoded({ extended: true })); //to parese data ,get from form


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


app.get("/chats", async (req, res) => {
    let chats = await Chat.find();
    console.log("Chat received");
    res.render("index.ejs", { chats });
})
console.log("")

//new chat 
app.get("/chats/new", (req, res) => {
    // res.send("Create new chat")
    res.render("new.ejs");
})

app.post("/chats", (req, res) => {
    let { from, to, message } = req.body;
    let newChat = new Chat({

        from: from,
        to: to,
        message: message,
        createdAt: new Date()
    }
    )
    newChat.save().then((res) => {
        console.log("chat saved");
    }).catch((err) => {
        console.log("Some mistake in new chat")
    })
    res.redirect("/chats")


})