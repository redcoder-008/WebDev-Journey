const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const bookingSchema = new Schema({
    hotelTitle:{
        type:String,
        requred:true,
    },
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    phoneNumber: {
        type: Number,
        required: true,
    },
    date: {
        type: Date,
    },
    startTime: {    // ✅ first time
        type: String,
    },
    endTime: {      // ✅ second time
        type: String,
    }
});

const Booking = model("Booking", bookingSchema);
module.exports = Booking;
