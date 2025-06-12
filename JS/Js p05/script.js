const student ={
    name:"karan",
    age : 20,
    home: "germany",
    tech :["Java","DSA"]

};
const post={
    username:"karankewat008",
    content : "coding vlog",
    likes :100000,
    comment : 40000,
    shares:1000,
    repost:100,
    tags:["karan","elon musk","Tim cook"]
}
const classroom ={
    karan:{
        grade:"A",
        age : 20
    },
    kamat:{
        grade:"A+",
        age:21
    }
}
const classInfo = [
    {
        name:"Karan",
        grade:"A+",
        city:"Berlin"
    },
  {   name:"Kamat",
    grade:"A+",
    city:"Berlin"
  }
]

console.log(Math.ceil(9.9999));
console.log(Math.random(0,9));
//Random INteger
let num = Math.random();
num = num*10000;
num= Math.floor(num);
console.log(num);
console.log(++num);
// alternative
let rand=Math.floor(Math.random()*10 +1); //Generate ramdom nummber from range 1 to 10;

console.log(rand);
let rand1 = Math.floor(Math.random()*100 +1); //Generate ramdom nummber from range 1 to 100;
console.log(rand1);
let rand2 = Math.floor(Math.random() *5 );   //Generate ramdom nummber from range 1 to 5;
console.log(rand2);
let rand3 = Math.floor(Math.random() *5 +20);   //Generate ramdom nummber from range 20 to 25;
console.log(rand3);

// Guessing Game
const max = prompt("Enter a max value");
let random = Math.floor(Math.random()*max) +1;
console.log(random);
let guess = prompt("Enter your First Guess");
while(true ){
    if( guess == "quit")
        {
            console.log("you quit the game");
            break;

        } 

   if  ( random == guess){
  console.log("Congratulation you Guessed the correct answer");
  break;
   }

   else if (guess>random){
    guess= prompt(" Wrong choice....Please try again(Hint:Enter small number)");
} 
else{
      guess= prompt(" Wrong choice....Please try again(Hint:Enter big number)");

  }
}


//object literals and arrays in js

