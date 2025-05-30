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