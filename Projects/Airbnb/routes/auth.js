const express = require("express");
const router = express.Router();
const User = require("../models/User.js");

// GET signup page
router.get("/signup", (req, res) => {
  res.render("Listings/signup.ejs");
});

// POST signup
router.post("/signup", async (req, res) => {
  const { username, email, password } = req.body;
  try {
    const newUser = new User({ username, email, password });
    await newUser.save();
    res.redirect("/login");
  } catch (err) {
    res.send("Error: " + err.message);
  }
});

// GET login page
router.get("/login", (req, res) => {
  res.render("Listings/login.ejs");
});

// POST login
router.post("/login", async (req, res) => {
  const { email, password } = req.body;
  try {
    // Directly check plain text password
    const user = await User.findOne({ email, password });
    if (user) {
      req.session.userId = user._id;
      res.render("/listings");
    } else {
      res.send("Invalid credentials");
    }
  } catch (err) {
    res.send("Error: " + err.message);
  }
});

// Logout
router.get("/logout", (req, res) => {
  req.session.destroy();
  res.redirect("/login");
});

module.exports = router;
