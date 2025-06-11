//  function one(){
//     return 1;
//  }
//  function two(){
//     return one() + one();
//  }
//  function three(){
//     let ans = two() + one();
//     console.log(ans);
//  }
//  three();

//  setTimeout(()=>{
//     console.log("hello 1 ")
//  },2000.1);
//  setTimeout(()=>{
//     console.log("hello  2 ")
//  },2000);


 //callback hell 
//  h1= document.querySelector("h1");

 
// function changecolor(color,delay,nextColorChange){
//     setTimeout(() => {
//         h1.style.color = color;
//         console.log("hello");
//         if(nextColorChange) nextColorChange();
        
//     }, delay);

//  }
//  changecolor("red",1000,()=>{
//     changecolor("green",1000,()=>{
//         changecolor("yellow",1000,()=>{
//             changecolor("aqua",1000);
//         })
//     })
//  });

 //  upar ka code me call back function likha huwa hai

 //promises

 function saveToDb(data,success,failure){
    let internetSpeed = Math.floor(Math.random()*10 +1);
    console.log(internetSpeed);

    if(internetSpeed >= 5){
        success();
    }else{
        failure();
    }
 }

 saveToDb("karan",()=>{
    console.log("Data saved successfully");
    saveToDb("kumar",()=>{
        console.log("another was was saved");
    },()=>{
        console.log("another data was not saved");
    })
 },()=>{
    console.log("Data was not saved");
 })