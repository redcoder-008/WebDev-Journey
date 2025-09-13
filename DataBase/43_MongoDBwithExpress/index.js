const express = require("express");
const app = express();
const mongoose = require("mongoose");
const path = require("path");
const Chat = require("./models/chat.js");
const methodOverride = require("method-override");
const ExpressError = require("./ExpressError");

app.set("views", path.join(__dirname, "views"));//to connect ejs file
app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));//it shows that from where css,js file is served
app.use(express.urlencoded({ extended: true })); //to parese data ,get from form
app.use(methodOverride("_method"));

main().then(() => {
    console.log("Connection successful");
}).catch(err => console.log(err));
async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/whatsapp');
}
async function main() {
    await mongoose.connect("mongodb://127.0.0.1:27017/fakewhatsapp");
}


app.listen(8080, () => {
    console.log("Listening on port 8080")
});

app.get("/", (req, res) => {
    res.send("Root is working")
})

function asyncWrap(fn) {
    return function (req, res, next) {
        fn(req, res, next).catch((err) => next(err));
    }
}


app.get("/chats", asyncWrap(async (req, res, next) => {
    let chats = await Chat.find();
    console.log("Chat received");
    res.render("index.ejs", { chats });

}));


//new chat 
app.get("/chats/new", (req, res) => {
    // res.send("Create new chat")

    res.render("new.ejs");
})

app.post("/chats", async (req, res, next) => {
    try {


        let { from, to, message } = req.body;
        let newChat = new Chat({

            from: from,
            to: to,
            message: message,
            createdAt: new Date(),
            updatedAt: new Date()
        }
        )
        await newChat.save();
        // ;.then((res) => {
        //     console.log("chat saved");
        // }).catch((err) => {
        //     console.log("Some mistake in new chat")
        // })
        res.redirect("/chats")
    } catch (err) {
        next(err);
    }




})
//new show route
app.get("/chats/:id", async (req, res, next) => {
    try {

        let { id } = req.params;
        let chat = await Chat.findById(id);
        if (!chat) {
            next(new ExpressError(404, "Chat nai vetlo"));

        }
        res.render("edit.ejs", { chat });
    } catch (err) {
        next(err);
    }

});

//edit route
app.get("/chats/:id/edit", async (req, res) => {
    try {

        let { id } = req.params;
        let chat = await Chat.findById(id);


        res.render("edit.ejs", { chat });
    } catch {
        next(err);
    }
})
//update route
app.put("/chats/:id", async (req, res) => {
    try {


        let { id } = req.params;
        let { message: newMessage } = req.body;
        let updatedChat = await Chat.findByIdAndUpdate(
            id,
            { message: newMessage },

            { runValidators: true, new: true },

        );
        let updateDate = await Chat.findByIdAndUpdate(
            id,
            {
                updatedAt: new Date()
            },
        )
        console.log(updatedChat);
        console.log(updateDate);
        res.redirect("/chats");
    } catch (err) {
        next(err);
    }
})
//destroy route
app.delete("/chats/:id", async (req, res) => {
    let { id } = req.params;
    let delchat = await Chat.findByIdAndDelete(id);
    res.redirect("/chats");

})
app.use((err, req, res, next) => {
    console.log(err.name);
});

//error handling middleware
app.use((err, req, res, next) => {
    let { status = 500, message = "Someerror occured" } = err;
    res.status(status).send(message);
})