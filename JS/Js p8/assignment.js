// Q1) Square and sum the array elements using the arrow function and then find the average of the array.
let arr = [5,5];

let square = arr.map((items)=>{

    return  items*items;
})
let sum= square.reduce((s,idx)=>{
    return s+idx;
})
let average = sum/arr.length;

//Q2) create a new array using the map function whose each element is equal to the original element plus 5
 let newarr= arr.map((element)=>{
    return element+5;
 });
let arr2=["karan","kumar"];
 //Q3) create a new array whose elements are in uppercase of words present in the original array
 let upper = arr2.map((ch)=>{
    return ch.toUpperCase();
 })

//  Q4) 

function d0ubleAndReturns (arg,...args){
    let double = args.map((args)=> x*2);
    return [ ...arg,...args];
}
//Q5)
  const mergeObjects= (obj1,obj2) =>({
    ...obj1,...obj2
  })
