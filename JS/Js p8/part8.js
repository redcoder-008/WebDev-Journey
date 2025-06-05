let arr=[1,2,3,4,5];
function print(item){
    console.log(item);
}
arr.forEach( (item)=> {console.log(item)});


let square = arr.map(el =>{
    return el*el;
})