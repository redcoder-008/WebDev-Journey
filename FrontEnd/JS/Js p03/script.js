// let str = prompt("Apka naam");
let str ="          kaRan";
// console.log(str.trim());
console.log("hw")
console.log(str.toUpperCase());
console.log(str.toLowerCase());
//index of 
console.log(str.indexOf('a'));
//method chaining
let newstr= str.toUpperCase().trim();
console.log(newstr);
//slice method
console.log(newstr.slice(2));
console.log(newstr.slice(1,4));
console.log(newstr.slice(-1));
//replace method
let strr="iLoveCoding";
console.log(strr.replace('i','we'));
console.log(strr.repeat(2));
//practise question
let msg='          help!'
console.warn(msg.trim().toUpperCase());
let clz='apnacollege';
console.log(clz.slice(4).replace('l','t'))
//array methods
let cars=['bmw','rr'];
cars.push('lambo');
console.log(cars.shift());
//array concatination
let primary=['red','green','yellow'];
let secondary=['blue','pink'];
// console.log(primary.concat(secondary));
// // console.log(primary.reverse());
console.log(primary.splice(1,0,'aquq','brown'));
console.log(secondary.splice(0,0,'car'));
console.log(secondary);

let start=['jan','july','march','august'];
start.splice(0,2,'july','june');
console.log(start);
let nestedarr=[[2,3],[3,6],[2,5],6];
//nested array for tictacctoe game state
let game= [['x',null,'0'],[null,'x',null],['0',null,'x']];
game[0][1]='0';

//string and methods 