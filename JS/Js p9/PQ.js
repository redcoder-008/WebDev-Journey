 let body = document.querySelector('body');
 let p = document.createElement('p');
 p.innerText= "Het I'm red!";
 p.style.color="red";
 body.append(p);
 let h3 = document.createElement('h3');
 h3.innerText = "I'm a blue h3";
 h3.style.color='blue';
 body.append(h3);
  let div = document.createElement('div');
  body.append(div);

  let h1 = document.createElement('h1');
  h1.innerText = 'I am in a div';
  div.append(h1);
  let para = document.createElement('p');
  para.innerText = "Mee too";
  div.append(para);

div.classList.add('box');
//Practise Question 1 
let input = document.createElement('input');
let button = document.createElement('button');
button.innerText = "Click Me";

body.append(input);
body.append(button);
//Qs 2 
button.setAttribute("id","btn");

input.setAttribute("placeholder", "usernaam");
//Qs3 
let btn = document.querySelector('#btn');

 btn.classList.add('button');

 //Qs4

 let head= document.createElement('h1');

 head.innerHTML = "<u> Dom Practise</u>";
//  head.style.color= purple;
 body.append(head);

 //Q5
 let paragraph = document.createElement('p');
 paragraph.innerText="apna college Delta Practise";
 body.append(paragraph);


