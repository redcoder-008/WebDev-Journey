let todo =[];

let req=prompt("Please enter your request");
while(true){
    if(req=="quit"){
        console.log("Quitting app....");
        break;
    }
   if (req == "list"){
        console.log("----------------")
        for(let i=0;i<todo.length;i++){
            console.log(i,todo[i]);
        }
        console.log("----------------")

    }
    else if(req=="add"){
        let task = prompt("Enter the task you want to add");
        todo.push(task);

        console.log("Task added")
        req=prompt("Please enter your request");
    }
  
    else if(req=="delete"){
        let item=prompt("enter the index you want to delete");
        todo.splice(item,1);
    
    }
    else{
        console.log("Wrong input");
        break;
    }
     req=prompt("Please enter your request");
}