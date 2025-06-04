//this keyword
const student = {
    name: "Karan",
    java: 60,
    dsa: 40,
    javascript: 60,

    average() {
        return (this.java + this.dsa + this.javascript) / 3;

    }
}
// arrow function
const func =(a,b) => {
    return a+b;
}
try{
    console.log(student.name);
}
catch(exp){
    console.log("undefined");
    console.log(exp);
}



