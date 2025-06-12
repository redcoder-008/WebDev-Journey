  async function greet(){
    //   throw" some random error";
//  console.log(a);
    return "Hello";
  }

  greet()
  .then((res )=>{
    console.log("Completed successfully",res)
  })
.catch((ree)=>{
    console.log("Opps!! some error",ree);
})
// arrow function
let demo= async()=>{
    return 5;
}
//await keyword
console.log("Awake function")
let h1= document.querySelector("h1");

function changeColor(color,delay){
    return new Promise ((resolve,reject)=>{
        
        setTimeout(()=>{
            h1.style.color = color;
            console.log(`Color Change to ${color}!`);
            resolve ("Color change");
            
        },delay);
    });
}

async function demoo(){
   await changeColor("red",1000);
  await  changeColor("yellow",1000);
 await   changeColor("blue",1000);
 await  changeColor("pink",1000);
 changeColor("aqua",1000);
}
  
