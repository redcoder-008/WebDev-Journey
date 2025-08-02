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

// User.find({age:{$gt:20}}).then((res)=>{
//   console.log(res);
// }).catch((err)=>{
//   console.log(res);
// });


// //find one in DB
// User.findOne({age:{$gt:20}}).then((res)=>{
//   console.log(res);
// }).catch((err)=>{
//   console.log(res);
// });

//find by id
/*
User.findById("688ce9701ea0436c9b3718d7").then((res)=>{
  // console.log(res);
  console.log("findBYId")
}).catch((err)=>{
  console.log("kuch garbad hai");
})

//update one
User.updateOne({name:"kum"},{email:"updated@gmail.com"}).then((res)=>{
  console.log("Update One");
}).catch((err)=>{
  console.log(err);
});
//update many
User.updateMany({age:{$gt:15}},{age:25}).then((res)=>{
  console.log("UpdateMany completed");
}).catch((err)=>{
  console.log("Some error");
});

//findandUpdate
User.findOneAndUpdate({name:"kum"},{age:4},{new:true}).then((res)=>{
  console.log("Result was displayed and updated");
  // console.log(res);

}).catch((err)=>{
  console.log(err);
});

//find and update by id
User.findByIdAndUpdate({_id:"688ce9701ea0436c9b3718d7"},{age:22},{new:true}).then((res)=>{
  // console.log(res);
  console.log("find by id and update is working")
}).catch((err)=>{
  console.log("Some Mistake");
})


*/
//delete 
/*
User.deleteOne({name:""}).then((res)=>{
  // console.log(res);
  console.log("deleted One Successfully");
}).catch((err)=>{
  console.log("Delete one me koi mistake hai");
});
//delete many 
User.deleteMany({name:"Kamat"}).then((res)=>{
  console.log(res);
  console.log("deleted Many Successfully");
}).catch((err)=>{
  console.log("Delete one me koi mistake hai");
});
*/
User.findByIdAndDelete({_id:"688da95340cc54a3c794171a"}).then((res)=>{
  console.log(res);
  console.log("Find by id and delete");

}).catch((err)=>{
  console.log("find by id and Delete me kuch garbad hai");

});