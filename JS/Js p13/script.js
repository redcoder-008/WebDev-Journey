// console.log("hello")
// let url = "https://catfact.ninja/fact";
// btn = document.querySelector("Button");
// p = document.querySelector(".result");

// async function getFacts() {
//     try {
//         let res = await axios.get(url);
//         console.log(res.data.fact);
//         return res.data.fact;

//     }
//     catch (e) {
//         console.log("Bc error aa gya", e);
//     }
// }

// getFacts();
// p.innerText = "karan";

// btn.addEventListener("click", async () => {
//     console.log("hello ");
//     let fact = await getFacts();

//     p.innerText = fact;
// })

// let url2 = "https://dog.ceo/api/breeds/image/random";
// btn = document.querySelector("Button");
// img = document.querySelector("#result");

// async function getimage() {
//     try {
//         let res = await axios.get(url2);
//         return (res.data.message);
//     }
//     catch (e) {
//         console.log("Error aa gya - ", e);
//     }


// }
// btn.addEventListener("click", async () => {
//     let link = await getimage();
//     console.log(link);
//     img.setAttribute("src", link);
// }) 
//this generates new image of dogs after clicking on generate image 

//list of colleges according to country name;
let url = "http://universities.hipolabs.com/search?name=";
async function getColleges(country) {
    try{
        let res = await axios.get(url + country);
        return (res.data);
    }
    catch(e){
        console.log("Opps!! Error aa gya :",e)
        return [];
    }
    
}

input  = document.querySelector("input");
btn = document.querySelector("button");
btn.addEventListener("click",async ()=>{
    let country = document.querySelector("input").value;
   console.log(country);
   let colArr=await  getColleges(country);
   console.log(colArr);
   showClg(colArr);

})
function showClg (colArr){
    let list = document.querySelector("#list");
    for(clz of colArr){
        let li= document.createElement("li");
        li.innerText = clz.name;
        list.appendChild(li);
    }

}
//part 13 completed
 //axios , sending header with api rerquest,activity using query string
	
//axios , sending header with api rerquest,activity using query string
 
