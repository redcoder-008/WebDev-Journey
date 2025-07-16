 let arr=[7,9,0,-2];
 let n=3;
 console.log(arr.slice(0,n));

 // Qs2
 let arr2=[7,9,0,-2];
 console.log(arr2.slice(arr2.length-n));
//Q3 string is blank or not
let a='a';
if(a==0){
    console.log('yes')
}
else{
    console.log('no')
}
// Qs4 to check char is lowercase
let s='kAran';
let idx=1;
if(s[idx] == s[idx].toLowerCase()){
    console.log('lowercase')
}
else{
    console.log('no')
}
//Q5 to strip leading and trailing spaces form a string


//Q6 wap to check if an element exists in an array or not
let ele=['k',2,'a',3,10];
let item = "k";
if(ele.includes(item) ){
    console.log("element exits")
}
else{
    console.log('Element do not exits')
}
