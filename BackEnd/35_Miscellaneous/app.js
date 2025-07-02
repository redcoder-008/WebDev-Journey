function PersonMaker(name,age){
    const person ={
        name: name,
        age:age,
        talk(){
            console.log(`Hellow i am ${this.name}`);
        },
    };
    return person;
}