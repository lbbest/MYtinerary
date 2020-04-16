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
    </div>
  );
}

const swipeStyle = {
  marginBottom: "5vh",
};

const activityStyle = {
  height: "20vh",
  backgroundColor: "#3c91e6",
};

const activityNameStyle = {
  position: "relative",
  top: "50%",
  transform: "translateY(-50%)",
  color: "white",
};
