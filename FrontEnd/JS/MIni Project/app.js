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
let ul = document.querySelector("ul");
// let li = document.querySelector("li");
let btn = document.querySelector("button");
btn.addEventListener("click",function(){
   let item = document.createElement("li");
   item.innerText= input.value;
   ul.appendChild(item);
   let delbtn= document.createElement("button");
   delbtn.innerText= "Delete";
   delbtn.classList.add(".delete");
   item.append(delbtn);
   input.value="";
})

ul.addEventListener("click",function(event){
   console.log(event.target.nodeName);
   if(event.target.nodeName == "BUTTON"){
      let it = event.target.parentElement;
      it.remove();
   }
})






