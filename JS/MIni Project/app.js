//  let div= document.querySelector("div");
// //  let ul= document.querySelector("ul");
//  let list= document.querySelectorAll("li");

//  div.addEventListener("click",function(event){
//      event.stopPropagation();
//     console.log("div was clicked");
//  })
//  ul.addEventListener("click",function(event){
//      event.stopPropagation();
     
//     console.log("ul was clicked");
//  })

//  for(li of list){
//  li.addEventListener("click",function(event){
//     event.stopPropagation();
//     console.log("li was clicked");
//  });
// } 


//to do list
let input = document.querySelector("input");
let btn = document.querySelector("button");
let ul= document.querySelector("ul");

btn.addEventListener("click",function(){
   let item = document.createElement("li");
   console.log(input.value);
   console.log("clicked");
   item.innerText= input.value;
   ul.append(item);
   input.value="";


})


 