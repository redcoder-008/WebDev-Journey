const mongoose=require("mongoose");
const Schema=mongoose.Schema;

const listingSchema=new Schema({
title:{
type:String,
required:true,
},
description:String,
image: {
type: Map, // You can use a Map or an Object for the image
of: String, // if you expect the image to have filename and url
},
price:Number,
location:String,
country:String,
});

const Listing=mongoose.model("Listing",listingSchema);
module.exports=Listing;