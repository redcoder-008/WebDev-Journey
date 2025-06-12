console.log("hello world");
for(let i=1;i<=10;i++){
    if(i%2==1) continue;
    console.log(i);

}
for(let i=1;i<10;i++){
    for(let j=1;j<=i;j++){
        console.log(j);
    }
}

//favourite movie

const favmov="avatar";
// let guess = prompt("Enter the movie name");
while((guess != favmov) && (guess != "quit")){
    
//     guess = prompt("Wrong!! Please Try Again");

}

if(guess == 'quit'){
    console.log("Looser")
}

if(favmov==guess){
    console.log("congratulation");
}

//Nested loops in array
let fruits =[['mango','banana'],['orange','litchee'],['apple','grapes']];
for(let i=0;i<fruits.length;i++){
    console.log(fruits[i]);
    for(let j=0;j<fruits[i].length;j++){
        console.log(`j=${j} , ${fruits[i][j]}`);
    }
}

//for of loop
for(fruit of fruits){
    console.log(fruit);
}
for(char of 'karan'){
    console.log(char);
}
//nested for of loop
for(fruit of fruits){
    for(internal of fruit){
        console.log(internal);
    }
}