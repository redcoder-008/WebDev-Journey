
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

function Person(name,age){
    this.name= name;
    this.age = age;
    
}
Person.prototype.talk= function (){
    console.log(`Hi, i am ${this.name}`);
};
let p1 = new Person("karan",20);