const express = require("express");
const app = express();

const port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Server is running on Port: " + port);
});

const bodyParser = require("body-parser");
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true
  })
);

const cors = require("cors");
app.use(cors());

app.use("/cities", require("./routes/cities"));
app.use("/itineraries", require("./routes/itineraries"));

const db = require("./keys").mongoURI;

const mongoose = require("mongoose");

mongoose
  .connect(db, {
    useNewUrlParser: true,
    useCreateIndex: true,
    dbName: "MYtinerary"
  })
  .then(() => console.log("Connection to Mongo DB established"))
  .catch(err => console.log(err));
