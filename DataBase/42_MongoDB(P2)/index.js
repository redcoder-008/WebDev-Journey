 const mongoose = require("mongoose");

main().then((res)=>{
    // console.log(res);
    console.log("Successful");
});

main().catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/test');
}


const userSchema = new mongoose.Schema({
  name:String,
  email:String,
  age:Number,
});

const User = mongoose.model("Users",userSchema);
const employee = mongoose.model("employe" ,userSchema);
/*
const user1 = new User({name:"Karan",email:"Karan@gmail.com",age:20});
const user2 = new User({name:"Kumar",email:"Kumar@gmail.com",age:20});
user1.save();
user2.save().then((res)=>{
  console.log("Saved");
}).catch((err)=>{
  console.log(err);

});
 User.insertMany([
  {name:"kum",email:"sample@gmaail.com",age:21},
  { name:"Kumar",email:"Kumar@gmail.com",age:30},
  {name:"Kamat",email:"Kamat@gmail.com",age:23}
 ]).then((res)=>{
  console.log(res);
 }).catch((err)=>{
  console.log(err);
 });


 */

 //find in database
User.find({age:{$gt:20}}).then((res)=>{
  console.log(res);
}).catch((err)=>{
  console.log(res);
});
