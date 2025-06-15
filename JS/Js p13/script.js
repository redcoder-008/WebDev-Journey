console.log("hello")
let url = "https://catfact.ninja/fact";

async function getfacts(){
    try{
        let res = await axios.get(url);
        console.log(res);
        let data = await res.json();
        console.log(res.fact);
    }catch(e){
        console.log("Bc error aa gya",e);
    }
}