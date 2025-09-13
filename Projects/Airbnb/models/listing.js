const mongoose=require("mongoose");
const Schema=mongoose.Schema;

const listingSchema=new Schema({
title:{
type:String,
required:true,
},
description:String,
image:{
filename: {
type: String,
default: 'listing image'
},
url: {
type: String,
default:"https://www.istockphoto.com/photo/exterior-of-modern-home-gm169821670-26945756?utm_campaign=srp_photos_top&utm_content=https%3A%2F%2Funsplash.com%2Fs%2Fphotos%2Fhome-design-from-outside%3Flicense%3Dfree&utm_medium=affiliate&utm_source=unsplash&utm_term=home+design+from+outside%3A%3Areduced-affiliates%3Aquarter",
set: (v) => v === ""?"https://www.istockphoto.com/photo/exterior-of-modern-home-gm169821670-26945756?utm_campaign=srp_photos_top&utm_content=https%3A%2F%2Funsplash.com%2Fs%2Fphotos%2Fhome-design-from-outside%3Flicense%3Dfree&utm_medium=affiliate&utm_source=unsplash&utm_term=home+design+from+outside%3A%3Areduced-affiliates%3Aquarter":v,
}},
price:Number,
location:String,
country:String,
});

const Listing=mongoose.model("Listing",listingSchema);
module.exports=Listing;