// //  let btn = document.querySelectorAll('button');
// //  console.dir(btn);
// //  btn.onclick = function() {
// //     console.warn("Button was clicked");
// //  }

// // //  btn.onclick= sayhello
// //  function sayhello(){
// //     console.log("hello");
// //  }
// //  function doubleclick(){
// //     console.log("doubleclicked");
// //  }
// // //  for(item of btn){
// // //     item.onmouseenter= sayhello;
// // //  }

// //  for(item of btn){
// //     item.addEventListener("click",sayhello) ;
// //     item.addEventListener("dblclick",doubleclick) ;
// //  }
// let btnn = document.querySelector("button");
// btnn.onclick=sayhi;

// function sayhi(){
//     console.log("random color was generated ");
// }

// function getrandomcolor(){
//     let red = Math.floor(Math.random()*255);
//     let green = Math.floor(Math.random()*255);
//     let blue = Math.floor(Math.random()*255);
//     let color = `rgb(${red}, ${green} , ${blue})`;
//     return color;
// }

// btnn.addEventListener("click",function(){
// let h2= document.querySelector('h2');
// // h2.innerText = getrandomcolor();
// h2.style.color = getrandomcolor();
// document.querySelector('div').style.backgroundColor= getrandomcolor();

// })

// let box = document.querySelector('div');
// box.addEventListener("click" , function(){
//     console.log("box is clicked");
// })

//  function changeColor(){
//      console.dir(this.innerText);
//     this.style.backgroundColor = "aqua";
//  }

//  box.addEventListener("click" ,changeColor);
//  btnn.addEventListener("click" ,changeColor);
//  box.addEventListener("click" ,changeColor);
//  box.addEventListener("click" ,changeColor);


let inp =document.querySelector("input");

// inp.addEventListener("keydown",function(event){
//     console.log("key = " ,event.key);
//     console.log("Code = " ,event.code);
//     console.warn("key was pressed");
//     if(event.key == "ArrowUp"){
//         console.log("upar jaa rha hai");
//     } else if(event.key == "ArrowDown"){
//         console.log("niche jaa rha hai")

//     }else if(event.key == "ArrowLeft"){
//         console.log("left jaa rha hai");

//     }
//     else if(event.key == "ArrowRight"){
//         console.log("Right jaa rha hai");
//     }
// })
let form = document.querySelector("form");
form.addEventListener("submit" , function(event){
event.preventDefault();
let user = document.querySelector("#user");
let pass = document.querySelector("#pass");

console.log(user.value);
console.log(pass.value);
})
 