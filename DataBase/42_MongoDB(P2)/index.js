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

const user1 = new User({name:"Karan",email:"Karan@gmail.com",age:20});
const user2 = new User({name:"Kumar",email:"Kumar@gmail.com",age:20});
user1.save();
user2.save();

