
let gameseq = [];
let userseq = [];
let started = false;
let level = 0;
let btn = document.querySelector("div");
let h2 = document.querySelector("h2");
let btns=["yellow","red","purple","green"];

document.addEventListener("keypress", function () {
    if (started == false) {

        console.log("game started");
        started = true;
        levelup();
    }

});
function btnflash(btn){
    btn.classList.add("flash");
    setTimeout(function (){
        btn.classList.remove("flash");
    },250);

    
}
function levelup(){
    level++;
    h2.innerText= `Level : ${level}`;
    let randomidx = Math.floor(Math.random()*3);
    let randomcolor= btns[randomidx];
    let randbtn= document.querySelector(`.${randomcolor}`);
    console.log(randomcolor);
    console.log(randbtn);


    btnflash(randbtn);


}