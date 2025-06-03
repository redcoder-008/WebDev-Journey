function print(){
    console.log("Hello world ")
}

// PQ 1 write a function to print a poem
function poem(){
    console.log("Twinkle twinkle little star");
}
 function roll(){
    let random = Math.floor((Math.random()*6) +1);
    console.log(random)
 }
 roll();

 function printname(name){
    console.log(name);
 }
 printname("karan");

 //practise qs  gives average
 function findaverage(num1,num2,num3){
    console.log(`Average of ${num1},${num2} and ${num3} is ${(num1+num2+num3 )/3}`);
 }

 // create a function that prints table of any number
 function table(n){
    for(let i=n;i<=n*10;i+=n){
        console.log(i );
    }
 }
 table(5);
// create a function that returns the sum of numbersfrom 1 to n.
function sumton(n){
    let sum=0;
    for(let i=1;i<=n;i++){

        sum+=i;
    }
    return sum;

}
console.log(sumton(4));