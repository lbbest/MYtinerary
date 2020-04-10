import React from "react";
import SwipeableViews from "react-swipeable-views";

export default function Activities(props) {
  const activities = props.activities;
  const city = props.city;
  return (
    <div className="activities">
      <SwipeableViews style={swipeStyle}>
        {activities.map((activity) => (
          <a
            href={`https://www.google.com/maps/dir/Current+Location/${city}+${activity}`}
            target="_blank"
            className="activity"
          >
            <div style={activityStyle}>
              <p style={activityNameStyle}>{activity}</p>
            </div>
          </a>
        ))}
      </SwipeableViews>
      {/* <p> ❮ ❯ </p> */}
    </div>
  );
}

const swipeStyle = {
  marginBottom: "5vh",
};

const activityStyle = {
  height: "10vh",
  backgroundColor: "#6AC0FF",
};

const activityNameStyle = {
  position: "relative",
  top: "50%",
  transform: "translateY(-50%)",
};
