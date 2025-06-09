 let btn = document.querySelectorAll('button');
 console.dir(btn);
 btn.onclick = function() {
    console.warn("Button was clicked");
 }

 btn.onclick= sayhello
 function sayhello(){
    alert("hello");
 }
 for(item of btn){
    item.onclick= sayhello;
 }