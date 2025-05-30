let name= "karan";
console.log(name.length);
let firstname= 'Karan';
console.log(firstname[0]);

console.log(firstname[firstname.length-1]);
let pen=10;
let pencil=5;
//template literals
let output = `The total price is : ${pen+pencil} Rupees`;
console.log(output);
// comparison operators
console.log(3>5);
console.log(3==3);
console.log(9!=1);

console.log('5'===5); //compares both value and type 
console.log('a' > 'A');

//traffic light
let color ='green';
if(color=='red'){
    console.log('stop')
}else if(color == 'yellow'){
    console.log('Slow Down');
}
else{
    console.log("GO")
}
//calculate popcorn size
let size ='s'
if(size=='xl'){
    console.log(`price is Rs 250`);
}
else if(size=='l'){
    console.log(`price is Rs 200`);
    
}
else if (size=='m'){
    console.log(`price is Rs 100`);
    
}
else{
    console.log(`price is Rs 50`);
    
}
//is it good sting or not 
let string ='aman';
if(string[0]=='a' && string.length > 3 ){
    console.log('It is good sting ');
}else{
    console.log('it is not a good string')
}
//switch statement to print number of days
let day =5;
switch (day){
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("tuesday");
        break;
    case 3:
        console.log("wednesday");
        break;
    case 4:
        console.log("thursday");
        break;
    case 5:
        console.log("friday");
        break;
    case 6:
        console.log("saturday");
        break;
    case 7:
        console.log("sunday");
        break;
        default :
        console.log("Wrong Input");
}

//alert and prompt
// alert("something is wrong ");
let fn = prompt("Enter your first name ");
console.log('welcome',fn);