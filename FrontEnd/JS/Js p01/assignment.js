let num =10;
if(num%10==0){
    console.log("good");
}
else{
    console.log("bad");
}
// Q2--take the user's name and age aas input using prompt.Then return back the follwoing statement to the user as an alert (by substituting their name and age)
let name= prompt("Enter your name");
let age = prompt("Enter your age");
alert(`${name} is ${age} years old.`);

let quater = 3;
switch (quater){
case 1 :
    console.log("January,February,March");
    break;
    case 2:
        console.log("April,May,June");
        break;
    case 3:
        console.log("July, August, September");
        break;
    case 4:
        console.log("October,November,December");
        break;
    default:
        console.error("Wrong input;")
}

// Q4 A string is a golden srting if it starts with the character 'A' or 'a' and has total length greater then 5
let string = 'au';
if(string[0]=='a'|| string[0]=='A' && string.length > 3)
{
    console.log("Golden String");
}
else{
    console.log("not a golden string")
}

//wap to check if 2 numbers have the same last digit
let num1 = 1234;
let num2= 213;
if(num1%10 == num2%10){
    console.log("same")
}
else{
    console.warn("not same")
}
console.log("in")

     
