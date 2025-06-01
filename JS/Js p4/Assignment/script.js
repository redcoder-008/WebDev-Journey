//Qs1 wap to delete all the occurrences of element 'num' in a given array
let arr = [1,2,3,4,5,6,2,3];
let num = 2;
for(let i =0;i<arr.length;i++){
    if(arr[i]==num){
        arr.splice(i,1);
    }
}

//Qs2 wap to fond the no of digits in a numbers;
let number =131213;
let count =0;
 while(number>0){
    // number/=10; 
    number = Math.floor(number/10);

    count++;
}
console.log( `Total no of digits in  ${num} is ${count}`);

//Q3 find the sum of digits
 let numb= 287152;
 let sum=0;
 let copy = numb;
 while(copy >0){
    //  let remainder= Math.floor(copy%10);
     let remainder=(copy%10);
     console.log(remainder);
   copy=Math.floor(copy/10);
   sum+=remainder;
}
console.log(sum)