const mongoose = require("mongoose");
const initData = require("./data");
const Listing = require("../models/listing.js");
const MONGO_URL= "mongodb://127.0.0.1:27017/wonderlust";

async function main(){
    await mongoose.connect(MONGO_URL);
}
main().then(()=>{
    console.log("Connection to db success")
}).catch(()=>{
    console.log("Error in connecting DB");
})
const initDb=async ()=>{
    await Listing.deleteMany({});//clear all the data
    await Listing.insertMany(initData.data);
    console.log("SAmple data was successfully inserted");


}
initDb();