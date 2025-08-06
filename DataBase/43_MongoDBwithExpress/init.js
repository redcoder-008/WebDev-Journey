const mongoose = require("mongoose");
const chat = require("./models/chat.js");
async function main(){
    await mongoose.connect("mongodb://127.0.0.1:27017/whatsapp");

}
main().then((res)=>{
    console.log("Connection success");
}).catch((err)=>{
    console.log(err)
});
let allChats =[
    {
        from:"sample",
        to:"test",
        message :"test1",
        createdAt:new Date(),
          updatedAt:Date(),

    },
    {
        from:"Karan",
        to:"kumar",
        message :"test2",
        createdAt:new Date(),
          updatedAt:Date(),

    },
    {
        from:"space",
        to:"pack",
        message :"test3",
        createdAt:new Date(),
          updatedAt:Date(),

    },
    {
        from:"mong",
        to:"nod",
        message :"test3",
        createdAt:new Date(),
        updatedAt: Date(),

    },

]

chat.insertMany(allChats).then((res)=>{
    console.log("data inserted");
}).catch((err)=>{
    console.log("Some mistake in insering multiple data");
});