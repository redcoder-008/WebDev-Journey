const { faker } = require('@faker-js/faker');
const mysql = require('mysql2');
const express = require("express");
const app = express();
const path = require("path");
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'karandatabase',
  password: 'karan@mysql',
  port: 3307
});
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));
let getRandomUser = () => {
  return [
    faker.string.uuid(),
    faker.internet.username(), // before version 9.1.0, use userName()
    faker.internet.email(),

    faker.internet.password(),

  ];
}
// let data=[];
// for(let i=0;i<100;i++){
//   data.push(getRandomUser());

// }

/*

let user = [ ["123c","Thirduser","Third@gmail.com","abc3" ],["123e","thirduser","third@gmail.com","abc4"]];
 let q ="INSERT INTO user (id,username,email,password) VALUES ?";
 try{
     connection.query(q,[data],(err,result)=>{
         if(err) throw err;
         console.log(result);
        });
    }
    catch(err){
        console.log(err);
    }
    connection.end();
    */
app.listen("8080", () => {
  console.log("server is running");
});

app.get("/", (req, res) => {
  // res.send("welcome to home page");
  let q = 'select count(*) from user';
  try {
    connection.query(q, (err, result) => {
      if (err) throw err;
      let count = result[0]['count(*)'];
      res.render("home.ejs", { count });
    });
  } catch (err) {
    console.log(err);
    res.send("Some error in DB");
  }
});
4
app.get("/user",(req,res)=>{
  let q= 'SELECT *from user';
  try{
    connection.query(q,(err,users)=>{
      if(err) throw err;
      res.render("showusers.ejs",{users});
      // console.log(result);
    })
  }catch(err){
    console.log(err);
    res.send("some mistake");
  }
})









