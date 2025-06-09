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
// let pass = document.querySelector("#pass");
// let form = document.querySelector("form");
// form.addEventListener("submit" , function(event){
//     event.preventDefault();
//     let user =this.elements[0];

// console.log(user.value);
// console.log(pass.value);
// alert( `hi ${user.value} your password is set to ${pass.value}`)
// })
//  pass.addEventListener("change" , function(){
//     console.log("changed");
//     console.log(this.value);

//  })
//   pass.addEventListener("input" , function(){
//     console.log("input");
//     console.log(this.value);
    
//  })
// let input = document.querySelector("input");
// let p = document.querySelector("p");
// input.addEventListener("input",function(){
//     console.log(input.value);
//     p.innerText = input.value;
// })

// let btn = document.createElement("button");
// btn.innerText= "button 1 "
// document.querySelector("body").append(btn);
// let select = document.querySelector("button");

// // select.addEventListener("onclick",function(){
// //     select.style.color= 'green';
// //     console.log("clicked");
// // })

// select.onclick= change;
// function change(){
//     console.log("hellow buddy");
//     this.style.color= "green";

// }

let input = document.querySelector("input");
let head = document.querySelector("h1");
input.addEventListener("input",function(){
    console.log(input.value);
      const filtered = input.value.replace(/[^a-zA-Z ]/g, '');
      input.textContent = filtered;
    head.innerText= input.value;
})
