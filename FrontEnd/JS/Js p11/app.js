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
 h1= document.querySelector("h1");

 
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

//  function saveToDb(data,success,failure){
//     let internetSpeed = Math.floor(Math.random()*10 +1);
//     console.log(internetSpeed);

//     if(internetSpeed >= 5){
//         success();
//     }else{
//         failure();
//     }
//  }

//  saveToDb("karan",()=>{
//     console.log("Data saved successfully");
//     saveToDb("kumar",()=>{
//         console.log("another was was saved");
//         saveToDb("kamat",()=>{
//             console.log("3rd data was saved");
//         }, ()=>{
//             console.log("3rd data was not saved");
//         })
//     },()=>{
//         console.log("another data was not saved");
//     })
//  },()=>{
//     console.log("Data was not saved");
//  })

// function addToDb(data){
//     return new Promise((success,reject) =>{
//         let internetSpeed= Math.floor(Math.random() *10 +1);
//         console.log(internetSpeed);
//         if(internetSpeed > 5){
//             success("Success : data is saved");
//         }else{
//             reject("Failed : Data is not saved");
//         }

//     });

// }
//    let request=addToDb("karan");
//    request.then((result)=>{
//        console.log("Promise result : ",result)
//     console.log("Completed");
//     console.log(request);
//     return addToDb("kamat");
// })
// .then((result)=>{
//     console.log("Data 2 saved") //promise chaining
//     console.log("Promise result : ",result)
// })

// .catch((error)=>{
//     console.log("InComplete")
//     console.log("Promise error : ",error)
//     console.log(request);
//    })

function changeColor(color,delay){
    return new Promise ((resolve)=>{
        setTimeout(()=>{
            h1.style.color= color;
            resolve("Hurray!! Color Changed")
            
        },delay);
    })
}

changeColor("red",1000).then(()=>{
    console.log("RED color ");
    return changeColor("blue",1000);
})
.then(()=>{
    console.log("Blue Color");
    return changeColor("aqua",1000);
    
})
.then(()=>{
    console.log("Aqua COlor was applied");
})
.catch(()=>{
    console.log("Upps!! Failed");
})
console.log(changeColor("red",1000));

console.log("Topics are like promises,then,catch,result,error,callback hell etc...All the functions are correct and commented out ");