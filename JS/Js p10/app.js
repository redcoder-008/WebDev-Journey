 let btn = document.querySelectorAll('button');
 console.dir(btn);
 btn.onclick = function() {
    console.warn("Button was clicked");
 }

 btn.onclick= sayhello
 function sayhello(){
    console.log("hello");
 }
//  for(item of btn){
//     item.onmouseenter= sayhello;
//  }

 for(item of btn){
    item.addEventListener("click",sayhello) ;
 }

