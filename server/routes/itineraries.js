const express = require("express");

const router = express.Router();

const itineraryModel = require("../model/itineraryModel");

/*get all city itineraries*/
// router.get("/all", (req, res) => {
//   itineraryModel
//     .find({})
//     .then(files => {
//       res.send(files);
//     })
//     .catch(err => console.log(err));
// });

// module.exports = router;

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
