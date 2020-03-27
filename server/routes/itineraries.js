const express = require("express");

const router = express.Router();

const itineraryModel = require("../model/itineraryModel");

/*get array of city itineraries*/
router.get("/:name", (req, res) => {
  let itineraryRequested = req.params.name;
  itineraryModel
    .find({ name: itineraryRequested })
    .then(itinerary => {
      res.send(itinerary);
    })
    .catch(err => console.log(err));
});

module.exports = router;
