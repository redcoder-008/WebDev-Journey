// write a function that returns array elemetn larger than a number

let arr=[2,3,4,5,6,4,7];
let numb =5;
function getLarger(array,num){
    for(item of array){
        if(item > num){
            return item;
        }
    }
}
let element = getLarger(arr,numb);

// Q2 function to get srting with all unique elements

let ans="";
let string="abcdefabcdeffada";
function getUnique(str){
    for(let i=0;i<str.length;i++){
        let currchar = str[i];
        if(ans.indexOf(currchar)==-1){
            ans = ans+currchar;
            //if there is not an element then it will add to it....
        }
    }
    return ans;
    console.log(ans);
}
getUnique(string);
console.log(getUnique(string));
