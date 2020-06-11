import React from "react";
import SwipeableViews from "react-swipeable-views";
// import axios from "axios";

/*CODE BLOCK WORKS BUT NEED GOOGLE API BILLING ACCOUNT*/
// const proxyurl = "https://cors-anywhere.herokuapp.com/";
// const url =
//   "https://maps.googleapis.com/maps/api/place/findplacefromtext/json?input=berlin&inputtype=textquery&fields=photos&key=AIzaSyA5CiXXF_Hz59KU-XnHAWmDZP4HjBY4VBY"; // site that doesn’t send Access-Control-*
// axios
//   .get(proxyurl + url)
//   .then((response) => {
//     console.log(response);
//   })
//   .catch(() =>
//     console.log("Can’t access " + url + " response. Blocked by browser?")
//   );
/*CODE BLOCK WORKS BUT NEED GOOGLE API BILLING ACCOUNT*/

export default function Activities(props) {
  const activities = props.activities;
  const city = props.city;
  return (
    <div style={activityContainer}>
      {activities.map((activity) => (
        <div style={activityBlock}>
          {activity}
          <a
            href={`https://www.google.com/maps/dir/Current+Location/${city}+${activity}`}
            target="_blank"
            rel="noopener noreferrer"
            className="activity"
            style={directionsButton}
          >
            Directions
          </a>
        </div>
      ))}
    </div>
  );
}

const activityContainer = {
  display: "flex",
  flexDirection: "row",
  flexWrap: "wrap",
  width: "100%",
  justifyContent: "space-around",
};

const activityBlock = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-around",
  height: "100px",
  width: "250px",
  margin: "20px 0",
  marginRight: "auto",
  backgroundColor: "white",
  borderRadius: "5px",
  color: "black",
};

const directionsButton = {
  border: "1px solid black",
  borderRadius: "5px",
  padding: "5px",
  margin: "0 auto",
  width: "50%",
};
