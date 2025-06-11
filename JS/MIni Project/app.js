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
let ul = document.querySelector("ul");

btn.addEventListener("click", function () {
   let item = document.createElement("li");
   let delbutton = document.createElement("button");
   delbutton.innerText = "Delete Task";
   delbutton.classList.add("delete");

   console.log("Button clicked");
   item.innerText = input.value;
   ul.append(item);
   input.value = "";
   item.append(delbutton);
   delbutton.addEventListener("click", function () {

      item.remove();
   })
})



input.addEventListener('keydown',function(event){
   if(event.key == "Enter"){
       console.log("h");
       let item = document.createElement("li");
   let delbutton = document.createElement("button");
   delbutton.innerText = "Delete Task";
   delbutton.classList.add("delete");

   console.log("Button clicked");
   item.innerText = input.value;
   ul.append(item);
   input.value = "";
   item.append(delbutton);
   delbutton.addEventListener("click", function () {

      item.remove();
   })

}
   console.log("keypressed");

});







