let arr=[1,2,3,4,5,6];
function print(item){
    console.log(item);
}
arr.forEach( (item)=> {console.log(item)});


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

let ghata = oddnum.reduce((result,el)=>{
    return result-el;
})
