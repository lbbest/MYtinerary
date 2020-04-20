/*express setup*/
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const passport = require("passport");

/*middleware*/
/*bodyparser*/
const bodyParser = require("body-parser");
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

/*middleware*/
/*cors*/
const cors = require("cors");
app.use(cors());

/*middleware*/
/*passport*/
app.use(passport.initialize());

/*port setup*/
const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log("Server is running on Port: " + port);
});

/*route to cities and itineraries*/
app.use("/cities", require("./routes/cities"));
app.use("/itineraries", require("./routes/itineraries"));
app.use("/users", require("./routes/users"));

const db = require("./keys").mongoURI;

/*mongoose setup*/

mongoose
  .connect(db, {
    useNewUrlParser: true,
    useCreateIndex: true,
    dbName: "MYtinerary",
  })
  .then(() => console.log("Connection to Mongo DB established"))
  .catch((err) => console.log(err));
