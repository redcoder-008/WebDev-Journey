
let gameseq = [];
let userseq = [];
let started = false;
let level = 0;
let btn = document.querySelector("div");
let h2 = document.querySelector("h2");
let btns = ["yellow", "red", "purple", "green"];
let highscore = 0;
let h3 = document.querySelector("h3");

document.addEventListener("keypress", function () {
    if (started == false) {

        // console.log("game started");
        started = true;
        levelup();
    }

});
function btnflash(btn) {
    btn.classList.add("flash");
    setTimeout(function () {
        btn.classList.remove("flash");
    }, 250);



}
function userflash(btn) {
    btn.classList.add("userflash");
    setTimeout(function () {
        btn.classList.remove("userflash");
    }, 250);



}
function levelup() {
    level++;
    h2.innerText = `Level : ${level}`;
    let randomidx = Math.floor(Math.random() * 3);
    let randomcolor = btns[randomidx];
    let randbtn = document.querySelector(`.${randomcolor}`);
    // console.log(randomcolor);
    // console.log(randbtn);
    btnflash(randbtn);
    gameseq.push(randomcolor);
    userseq = [];
    console.log(gameseq);
    console.log(userseq);




}
function checkAns(idx) {

    if (userseq[idx] == gameseq[idx]) {
        // console.log("same val");
        if (userseq.length == gameseq.length) {
            setTimeout(levelup, 1000);


        }
    } else {
        console.log("game over");
        h2.innerHTML = `Game Over!  Your Score was ${level} <br>Press Any key to Restart`;
        document.querySelector("body").style.backgroundColor = "red";
        setTimeout(function () {
            document.querySelector("body").style.backgroundColor = "white";

        }, 150);
        if (highscore < level) {
            highscore = level;
            h3.innerText = `High Socre : ${highscore}`;
        }
        reset();
    }
}
function btnpress() {
    let btn = this;
    userflash(btn);
    // console.log(btn);
    usercolor = btn.getAttribute("id");
    userseq.push(usercolor);
    checkAns(userseq.length - 1);


}
let allbtns = document.querySelectorAll(".btn");
for (btn of allbtns) {
    btn.addEventListener("click", btnpress);
}


function reset() {
    started = false;
    gameseq = [];
    userseq = [];
    level = 0;

}

