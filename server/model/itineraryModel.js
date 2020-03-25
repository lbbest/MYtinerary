const mongoose = require("mongoose");
var Schema = mongoose.Schema;

const itinerarySchema = new Schema({
  city: {
    type: String,
    required: true
  },
  title: {
    type: String,
    required: true,
    unique: true
  },
  picture: {
    type: String
  },
  rating: {
    type: Number,
    required: true
  },
  duration: {
    type: Number,
    required: true
  },
  price: {
    type: String,
    required: true
  },
  hashtags: {
    type: Array,
    required: true
  }
});

module.exports = mongoose.model("itinerary", itinerarySchema);
