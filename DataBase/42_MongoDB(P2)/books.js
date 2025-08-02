const mongoose = require("mongoose");
main().then(() => {
    console.log("connection success")
}).catch((err) => {
    console.log(err);
});
async function main() {
    await mongoose.connect("mongodb://127.0.0.1:27017/amazon");

}

const bookSchema = mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    author: {
        type: String,

    },
    price: {
        type: Number,
    }
});
const Book = mongoose.model("Book", bookSchema);

let book1 = new Book({
    // title:"DSA",
    author: "KAran",
    price: 242,
})

book1.save().then((res) => {
    console.log(res);
}).catch((err) => {
    console.log("Some mistake");
    console.log(err);
});

const kitabSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        maxLength:20,//name should not be more than 20
    },
    author: {
        type: String,
    },
    price: {
        type: Number,
        min:[1,"Price bohot kam hai isko badha k likho"],
    },
    discount: {
        type: Number,
        default: 0,

    },
    category:{
        type:String,
        enum:["fiction","non-fiction"]//category inhi mese hona chaiye
    }
});
const kitab = mongoose.model("kitab", kitabSchema);

let kitab1 = new kitab({
    title: "MArvel comic",
    author: "xyz",
    price: 0,
    category:"fiction",
});

kitab1.save().then((res) => {
    console.log("Data Inserted");
}).catch((err) => {

    console.log(err.errors.price.properties.message);
    console.log("Kuch badbad hai ");
}); 

kitab.findByIdAndUpdate(
    "688dbe3019ac9074940370ec",
    {price:200},
    {runValidators:true}

).then((res)=>{
    console.log(res),
    console.log("Update success");
}).catch((err)=>{
    console.log("Some mistake in updation");
});
 