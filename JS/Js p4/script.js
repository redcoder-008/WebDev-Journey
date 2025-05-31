// console.log("hello world");
// for(let i=1;i<=10;i++){
//     if(i%2==1) continue;
//     console.log(i);

// }
// for(let i=1;i<10;i++){
//     for(let j=1;j<=i;j++){
//         console.log(j);
//     }
// }
//favourite movie

const favmov="avatar";
let guess = prompt("Enter the movie name");
while((guess != favmov) && (guess != "quit")){
    
    guess = prompt("Wrong!! Please Try Again");

}

if(guess == 'quit'){
    console.log("Looser")
}

if(favmov==guess){
    console.log("congratulation");
}