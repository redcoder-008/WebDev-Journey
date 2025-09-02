// booking.js
const mongoose = require("mongoose");
const bookingData = require("./data2"); // your sample data
const Booking = require("../models/booking"); // adjust path if needed

const MONGO_URL = "mongodb://127.0.0.1:27017/wonderlust"; // your DB name

async function seedBookings() {
  try {
    // Connect to MongoDB
    await mongoose.connect(MONGO_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
    console.log("Connected to MongoDB");

    // Clear existing bookings
    await Booking.deleteMany({});
    console.log("Existing bookings cleared");

    // Insert sample bookings
    await Booking.insertMany(bookingData.data);
    console.log("Sample bookings inserted successfully");

    mongoose.connection.close();
  } catch (err) {
    console.error("Error seeding bookings:", err);
  }
}

// Run the seed function
seedBookings();
