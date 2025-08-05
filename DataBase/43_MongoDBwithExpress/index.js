const express = require("express");
const app = express();
const mongoose = require("mongoose");
const path = require("path");

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

