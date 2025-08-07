const express = require("express");
const app = express();
const mongoose = require("mongoose");
const ejs = require("ejs");
const Listing = require("./models/listing.js")
app.listen(8080, () => {
    console.log("Listining on port 8080");
});
const MONGO_URL = "mongodb://127.0.0.1:27017/wonderlust";

async function main() {
    await mongoose.connect(MONGO_URL);
}

main().then(() => console.log("DataBase COnnection success")).catch((err) => {
    console.log("You have error in connectiong db");
})
app.get("/", (req, res) => {
    res.send("hellow world");
})

// app.get("/testListing",async (req,res)=>{
//     let sampleListing = new Listing({
//         title:"My New Villa",
//         description : "This my Mine ",
//         price :120000,
//         location:"Dhanplathan 7",
//         counrty:"Nepal",

//     });
//     await sampleListing.save();
//     console.log("sample was saved");
//     res.send("Success Full testing")


// });

//index route
app.get("/listings",(req,res)=>{

})