const express = require("express");

const router = express.Router();

const itineraryModel = require("../model/itineraryModel");

/*get array of city itineraries*/
router.get("/:name", (req, res) => {
  let itineraryRequested = req.params.name;
  itineraryModel
    .find({ name: itineraryRequested })
    .then((itinerary) => {
      res.send(itinerary);
    })
    .catch((err) => console.log(err));
});

module.exports = router;

/*itinerary post route*/
router.post("/additinerary", (req, res) => {
  const newItinerary = new itineraryModel({
    name: req.body.name,
    title: req.body.title,
    user: req.body.user,
    picture: req.body.picture,
    duration: req.body.duration,
    price: req.body.price,
    hashtags: req.body.hashtags,
    activities: req.body.activities,
  });
  newItinerary
    .save()
    .then((itinerary) => {
      res.send(itinerary);
    })
    .catch((err) => {
      res.status(500).send("Server error");
    });
});
