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

//Q3 function that accept list and return the largest country name as output

let countryy=["Australia","Germany","UnitedStatesofAmerica"];
let ansidx=0;
function findlargest(country){
    for(let i=0;i<country.length;i++){
        let currcharLength = country[i].length; 
        let anslength = country[ansidx].length;
        if(currcharLength > anslength){
            ansidx= i;
        }
    }
    console.log(country[ansidx]);
    return country[ansidx];
}
findlargest(countryy);
// function to count number of vowels;

let s= "aeiouaeiou";
let Totalvowels = 0;
function calculatevowels(stringg){
for(charr of stringg){
    if(charr =='a'  ||
        charr =='e' ||
        charr =='i' ||
        charr =='o' ||
        charr =='u')
        {
            Totalvowels++;
        }
    
}

return Totalvowels;
    
}
console.log(calculatevowels(s));

// generate random from given range

function generaterandom(start,end){
    let diff = end-start;
    return (Math.floor(Math.random() *diff )+start );
}

console.log(generaterandom(2,3));