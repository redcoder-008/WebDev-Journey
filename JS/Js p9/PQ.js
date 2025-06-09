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