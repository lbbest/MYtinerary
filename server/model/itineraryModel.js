const mongoose = require("mongoose");
var Schema = mongoose.Schema;

/*itinerary schema structure*/
const itinerarySchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
    unique: true,
  },
  user: {
    type: String,
    required: true,
  },
  picture: {
    type: String,
  },
  duration: {
    type: String,
    required: true,
  },
  price: {
    type: String,
    required: true,
  },
  hashtags: {
    type: Array,
  },
  activities: {
    type: Array,
    required: true,
  },
});

module.exports = mongoose.model("itinerary", itinerarySchema);
