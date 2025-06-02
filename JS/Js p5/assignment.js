console.log("hellow world");
//Qs1 wap that crreates generates a random number representing a dice roll
let dice = Math.floor(Math.random()*6 +1);
console.log(dice);

//Create an object representing a car that sstores the following properties for the car : name,mode color
 
let car = [


    {
        name:"BMW",
        model:"M5",
        color:"Blue"
    },
    {
        name:"Rolls Royce",
        model:"RR-Ghost",
        color:"maroonRed"
    }

]
console.log(car[1].name);

let person=[
    {
        name:"Karan",
        age:20,
        city:"Berlin"
    },
    {
        name:"Kamat",
        age:19,
        city:"Old Berlin "
    }
]
person[1].city="New York";
person[1].country="United States";