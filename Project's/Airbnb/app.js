const express = require("express");
const app = express();
const mongoose = require("mongoose");
const ejs = require("ejs");
const Listing = require("./models/listing.js");
const path = require("path");
const methodOverride = require("method-override");
const ejsMate = require("ejs-mate");
const wrapAsync = require("./utils/wrapAsync.js");
const expressError = require("./utils/expressError.js");
const { listingSchema } = require("./schema.js");

app.set(express.static(path.join(__dirname, "views")));
app.set("view engine ", "ejs");
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));
app.engine("ejs", ejsMate);
app.use(express.static(path.join(__dirname, "/public")));

app.listen(8080, () => {
  console.log("Listining on port 8080");
});
const MONGO_URL = "mongodb://127.0.0.1:27017/wonderlust";

async function main() {
  await mongoose.connect(MONGO_URL);
}

main()
  .then(() => console.log("DataBase COnnection success"))
  .catch((err) => {
    console.log("You have error in connectiong db");
  });
app.get("/", (req, res) => {
  res.send("hellow world");
});

// app.get("/testListing",async (req,res)=>{
//     let sampleListing = new Listing({
//         title:"My New Villa",
//         description : "This my Mine ",
//         price :120000,
//         location:"Dhanplathan 7",
//         counrty:"Nepal",

//     });
//     await sampleListing.save();
//     console.log("sample was saved");
//     res.send("Success Full testing")

// });

const validateListing = (req, res, next) => {
  let { error } = listingSchema.validate(req.body);
  if (error) {
    let errMsg = error.details.map((el) => el.message).join(",");
    throw new expressError(400, error);
  } else {
    next();
  }
};

//index route
app.get("/listings", async (req, res) => {
  const allListings = await Listing.find({});
  res.render("Listings/index.ejs", { allListings });
});

//new route
app.get("/listings/new", (req, res) => {
  res.render("Listings/new.ejs");
});
//show route
app.get("/listings/:id", async (req, res) => {
  // res.send("Welcome to each id");
  let { id } = req.params;
  let listing = await Listing.findById(id);
  res.render("Listings/show.ejs", { listing });
});

//create route
app.post(
  "/listings",
  validateListing,
  wrapAsync(async (req, res, next) => {
    const newlisting = new Listing(req.body.listing);

    await newlisting.save();
    res.redirect("/listings");
  })
);

//get edit form
app.get("/listings/:id/edit", async (req, res) => {
  let { id } = req.params;
  let listing = await Listing.findById(id);
  res.render("Listings/edit.ejs", { listing });
  // res.send("welcome")
});

app.put("/listings/:id/", async (req, res) => {
  let { id } = req.params;
  await Listing.findByIdAndUpdate(id, req.body.listing);
  res.redirect("/listings");
});
//delete route
app.delete("/listings/:id", async (req, res) => {
  let { id } = req.params;
  await Listing.findByIdAndDelete(id);
  res.redirect("/listings");
});
app.use((req, res, next) => {
  next(new expressError(404, "Page not found"));
});
app.use((err, req, res, next) => {
  let { statusCode = 500, message = "Something went wrong" } = err;
  res.render("error.ejs", { err });
  console.log(err);
  req.list(rso);
});
