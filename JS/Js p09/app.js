// document[8].innerText = "karan";
 document.getElementById("mainImg"); //get element by id
 document.getElementsByClassName("kk");//get element by class name

 let img = document.querySelector('img');

 let attr= img.getAttribute(img);
 img.setAttribute('src','assets/creation_1.png')

 let heading= document.querySelector("h1");
 heading.style.color='red'; 

 let links = document.querySelectorAll("a");
//  links.style.color='red';
 for(i of links){
    i.style.color= "red";

 }

//  console.log(heading.);

let body = document.querySelector('body');
let newp= document.createElement('p');
newp.innerText="I am new paragraph 123";
body.appendChild(newp);
newp.append("i am moore"); //addat beggning
newp.prepend("i am prrepend"); //add at starting


//   box.append(newp);

let p = document.querySelector('p');
let btn = document.createElement('button');
btn.innerText="I am button";
p.append('btn');
p.insertAdjacentElement('afterbegin',btn);
btn.remove(); //use to remove 

//dom query selector,manipulating attribute,classlist property,addming element on page
