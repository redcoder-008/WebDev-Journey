async function greet() {
    //   throw" some random error";
    //  console.log(a);
    return "Hello";
}

greet()
    .then((res) => {
        console.log("Completed successfully", res)
    })
    .catch((ree) => {
        console.log("Opps!! some error", ree);
    })
// arrow function
let demo = async () => {
    return 5;
}
//await keyword
console.log("Awake function")
let h1 = document.querySelector("h1");

function changeColor(color, delay) {
    return new Promise((resolve, reject) => {

        setTimeout(() => {
            h1.style.color = color;
            console.log(`Color Change to ${color}!`);
            resolve("Color change");

        }, delay);
    });
}

async function demoo() {
    await changeColor("red", 1000);
    await changeColor("yellow", 1000);
    await changeColor("blue", 1000);
    await changeColor("pink", 1000);
    changeColor("aqua", 1000);
}
//went home  not coded today anything on js

let json = '{"fact":"Many cats love having their forehead gently stroked.","length":52}';
let validres = JSON.parse(json);
// h1.innerText=  validres.fact;

let url = "https://catfact.ninja/fact";
fetch(url).then((response)=>{
   return  response.json();
})
.then((data)=>{
    console.log("data 1: ",data.fact);
    return fetch(url);

})
.then((res)=>{
    return res.json();
})
.then((data2)=>{
    console.log("Data 2 : " , data2.fact);
    h1.innerText = data2.fact;
})
.catch((err)=>{
    console.log(err);
})

// 
async function getFact() {
    let res = await fetch(url);
    let data = await res.json();
    console.log(data.fact);
    
}