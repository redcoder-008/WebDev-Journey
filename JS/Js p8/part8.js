let arr=[4,3,4,5];
function print(item){
    console.log(item);
}
// arr.forEach( (item)=> {console.log(item)});


let square = arr.map(el =>{
    return el*el;
})

let student = [
    {
        name:"karan",
        mark:98,
    },
    {
        name:"kamat",
        mark:88,
    },{
        name:"kumar",
        mark:99,
    },
]
//map
let gpa = student.map((el) => {
    return el.mark/10;
    
});
//filter
let oddnum = arr.filter((el)=>{
    return el%2!=0;
})
let checkevery = oddnum.every((el)=>{
    return el%2!=0;
})
let arr2=[100,200,400];

let ghata = arr2.reduce((result,el)=>{
    return result-el;
})
//maximum in an array

let result = arr2.reduce((max,el)=>{
    if(max>el){
        return max;
    }
    else{
        return el;
    }
})

//check whether all the element is multiple of 10 or not
let check= arr2.every((el)=>{
    return el%10 == 0;

},);

//find the mimimum in the array
let min= arr.reduce((res,el)=>{
    if(res<el) return res;
    else return el;
})
//default parameter
function area (r,pi=3.142){
    return pi*(r*r);
}

console.log(...arr); //spread function (it will print all the element individually)
let char = [..."karan"];

const data=[
    {
        email:"karan@gmail.com",
        password:"karan"
    },
    {
        email:"kamat@gmail.com",
        password:"karan"
    },
]
let datas = [...data,id=1,country="Nepal"];
//rest
function sum(...args){
    for(item of args){
        console.log(item);

    }

}
function sum(...args){
    console.log(args.reduce((sum,el)=>{
        return sum+el;
    }));
}

//destructure 
let names=["karan","Kumar","Kamat","Nepal"];
let [winner,runnerup,...other]= names; //destructure + rest

//destructuring
const employee={
        name:"Karan",
        post:"Tech Lead",
        tech:"Java",
        Username:"Karan@008",
        password:"Karan@123"
    };
//destructuring with objects
let { Username,password,post:level} = employee;

