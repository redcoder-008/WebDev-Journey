//  let btn = document.querySelectorAll('button');
//  console.dir(btn);
//  btn.onclick = function() {
//     console.warn("Button was clicked");
//  }

// //  btn.onclick= sayhello
//  function sayhello(){
//     console.log("hello");
//  }
//  function doubleclick(){
//     console.log("doubleclicked");
//  }
// //  for(item of btn){
// //     item.onmouseenter= sayhello;
// //  }

//  for(item of btn){
//     item.addEventListener("click",sayhello) ;
//     item.addEventListener("dblclick",doubleclick) ;
//  }
let btnn = document.querySelector("button");
btnn.onclick=sayhi;

function sayhi(){
    console.log("random color was generated ");
}

function getrandomcolor(){
    let red = Math.floor(Math.random()*255);
    let green = Math.floor(Math.random()*255);
    let blue = Math.floor(Math.random()*255);
    let color = `rgb(${red}, ${green} , ${blue})`;
    return color;
}

btnn.addEventListener("click",function(){
let h2= document.querySelector('h2');
h2.innerText = getrandomcolor();
h2.style.color = getrandomcolor();
document.querySelector('div').style.backgroundColor= getrandomcolor();
})


