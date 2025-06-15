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

let url2 = "https://dog.ceo/api/breeds/image/random";
btn = document.querySelector("Button");
img = document.querySelector("#result");

async function getimage() {
    try {
        let res = await axios.get(url2);
        return (res.data.message);
    }
    catch (e) {
        console.log("Error aa gya - ", e);
    }


}
btn.addEventListener("click", async () => {
    let link = await getimage();
    console.log(link);
    img.setAttribute("src", link);
})
