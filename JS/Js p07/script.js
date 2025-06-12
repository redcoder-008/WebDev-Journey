//this keyword
const student = {
    name: "Karan",
    java: 60,
    dsa: 40,
    javascript: 60,

    average() {
        return (this.java + this.dsa + this.javascript) / 3;

    }
}
// arrow function
const func =(a,b) => {
    return a+b;
}
try{
    console.log(student.name);
}
catch(exp){
    console.log("undefined");
    console.log(exp);
}


// set timme out
setTimeout(()=>{
    console.log("Hello")
},3000);
console.log("timer")
 // set interval

 let id = setInterval(()=>{
    console.log("Hellow");
 },1000);

 console.log( "id",id);
// write an arrow function that returns the squate of a numner n

 const square = n =>{
    return n*n;
}


// ..write a function that prints "hello world " 5 times at the interval of 2s each

let idx = setInterval(()=>{
    console.log("Hellow world");
},2000);

setTimeout(()=>{
    clearInterval(idx)
},10000);

//this keyword, set timeout,set interval,arrow function

