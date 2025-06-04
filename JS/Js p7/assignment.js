//Q1 

let average = arrayInput =>{
    let average=0;
    for(item of arrayInput){
        average+=item;

    }
    return average/arrayInput.length;

}
let arr = [1,2,3,4,5,11];
// function average2(arr){
//       let average=0;
//     for(item of arr){
//         average+=item;

//     }
//     return average/arr.length;

// }
let out= average(arr);

// Q2) 

let check = n => n%2==0;