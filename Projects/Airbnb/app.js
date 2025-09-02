const express = require("express");
const app = express();
const mongoose = require("mongoose");
const ejs = require("ejs");
const Listing = require("./models/listing.js")
const Booking = require("./models/booking.js"); 
const path = require("path");
const methodOverride = require("method-override");
const ejsMate = require("ejs-mate");

app.set(express.static(path.join(__dirname, "views")));
app.set("view engine ", "ejs");
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));
app.engine("ejs",ejsMate);
app.use(express.static(path.join(__dirname,"/public")));


app.listen(8080, () => {
    console.log("Listining on port 8080");
});
const MONGO_URL = "mongodb://127.0.0.1:27017/wonderlust";

async function main() {
    await mongoose.connect(MONGO_URL);
}

main().then(() => console.log("DataBase COnnection success")).catch((err) => {
    console.log("You have error in connectiong db");
})
app.get("/", (req, res) => {
    res.send("hellow world");
})

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

//index route
app.get("/listings", async (req, res) => {
    const allListings = await Listing.find({})
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
    let listing = await Listing.findById(id)
    res.render("Listings/show.ejs", { listing });

});

//create route
app.post("/listings", async (req, res,next) => {
    try{

        const newlisting = new Listing(req.body.listing);
        await newlisting.save();
        res.redirect("/listings");
    }catch{
        next(err);
    }

});



//get edit form
app.get("/listings/:id/edit", async (req, res) => {
    let { id } = req.params;
    let listing = await Listing.findById(id);
    res.render("Listings/edit.ejs", { listing });
    // res.send("welcome")
});


app.put("/listings/:id/", async(req, res) => {
    let {id} = req.params;
    await Listing.findByIdAndUpdate(id,(req.body.listing));
    res.redirect("/listings")


 
}); 
//delete route
app.delete("/listings/:id",async(req,res)=>{
    let {id} = req.params;
    await Listing.findByIdAndDelete(id);
    res.redirect("/listings");
}) 

app.get("/listings/:id/book", async (req, res) => {
    // res.send("Booking opwn");#D23658

    let { id } = req.params;
    let listing = await Listing.findById(id);
    res.render("Listings/book.ejs", { listing });
    // res.send("welcome")
});

// app.get("/booking", async (req,res)=>{
//      const allBooking = await Bookings.find({})
//     res.render("Listings/showBooking.ejs",{allBooking});
// }); 

app.get("/booking", async (req, res) => {
  try {
    const allBooking = await Booking.find();
    res.render("Listings/showBooking.ejs",{allBooking});
  } catch (err) {
    res.status(500).send(err.message);
  }
});


app.use((err,req,res,next)=>{
    console.log(err);
    res.send("SomeThing is wrong",);

});

app.post("/booking", async (req, res) => {
  try {
    const {  hotelTitle,name, email, phoneNumber, date, startTime, endTime } = req.body;
    const newBooking = new Booking({
        hotelTitle,
      name,
      email,
      phoneNumber,
      date,
      startTime,
      endTime
    });
    await newBooking.save();
    res.redirect("/booking"); // or wherever you want to show bookings
  } catch (err) {
    console.error(err);
    res.send("Error creating booking");
  }
});


//login/signup
const session = require("express-session");
const MongoStore = require("connect-mongo");
const passport = require("passport");
const LocalStrategy = require("passport-local");
const User = require("./models/User");

// ✅ Session setup
app.use(session({
  secret: "yourSecretKey",
  resave: false,
  saveUninitialized: false,
  store: MongoStore.create({ mongoUrl: "mongodb://127.0.0.1:27017/hotelApp" }),
  cookie: { maxAge: 1000 * 60 * 60 * 24 } // 1 day
}));

// ✅ Passport middleware
app.use(passport.initialize());
app.use(passport.session());

// ✅ Local strategy
passport.use(new LocalStrategy(async (username, password, done) => {
  const user = await User.findOne({ username });
  if (!user) return done(null, false, { message: "User not found" });
  const isValid = await user.validatePassword(password);
  if (!isValid) return done(null, false, { message: "Invalid password" });
  return done(null, user);
}));

// ✅ Serialize / Deserialize
passport.serializeUser((user, done) => done(null, user.id));
passport.deserializeUser(async (id, done) => {
  const user = await User.findById(id);
  done(null, user);
});

