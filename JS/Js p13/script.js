console.log("hello")
let url = "https://catfact.ninja/fact";
btn = document.querySelector("Button");
p = document.querySelector(".result");

async function getFacts(){
    try {
        let res = await axios.get(url);
        console.log(res.data.fact);
        return res.data.fact;
     
    } 
    catch(e){
        console.log("Bc error aa gya",e);
    }
}

getFacts();
p.innerText = "karan";

btn.addEventListener("click",async()=>{
    console.log("hello ");
    let fact = await getFacts();
  
    p.innerText = fact;
})
