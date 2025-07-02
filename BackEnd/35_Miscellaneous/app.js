
// //factory function
// function PersonMaker(name,age){
//     const person ={
//         name: name,
//         age:age,
//         talk(){
//             console.log(`Hellow i am ${this.name}`);
//         },
//     };
//     return person;
// }
 

//new Operator
function Person(name,age){
    this.name= name;
    this.age = age;
    
}
Person.prototype.talk= function (){
    console.log(`Hi, i am ${this.name}`);
};
let p1 = new Person("karan",20);

class Aadmi{
    constructor(name,age){
        this.name= name;
        this.age = age;

    }
    talk(){
        console.log(`I am $`)
    }
}
class Student extends Aadmi{
    constructor(name,age,subject){
        super(name,age); //parent class constructor is called

        this.subject= subject;

    }
}
let t1 = new Student("karan" ,20,"DSA");

class Mammal{
    constructor (name){
        this.name = name;
    }
    eat(){
        console.log(`${this.name} can eat`);
    }
}
class Dog extends Mammal{
    constructor (name){
        super(name);
    }
    bark(){
        console.log(`${this.name} can bark`);
    }
    
}

let d1= new Dog("Tommy");