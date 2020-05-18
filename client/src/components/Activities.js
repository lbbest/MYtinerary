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
    <SwipeableViews>
      {activities.map((activity) => (
        <a
          href={`https://www.google.com/maps/dir/Current+Location/${city}+${activity}`}
          target="_blank"
          rel="noopener noreferrer"
          className="activity"
        >
          <div style={activityStyle}>
            <p style={activityNameStyle}>{activity}</p>
          </div>
        </a>
      ))}
    </SwipeableViews>
  );
}

const activityStyle = {
  height: "20vh",
  backgroundColor: "#fff",
};

const activityNameStyle = {
  position: "relative",
  top: "50%",
  transform: "translateY(-50%)",
  color: "black",
};
