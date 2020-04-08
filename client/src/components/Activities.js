import React from "react";
import SwipeableViews from "react-swipeable-views";

export default function Activities(props) {
  const activities = props.activities;
  return (
    <div className="activities">
      <SwipeableViews style={swipeStyle}>
        {activities.map((activity) => (
          <div className="activity" style={activityStyle}>
            <p style={activityNameStyle}>{activity}</p>
          </div>
        ))}
      </SwipeableViews>
      <p> ❮ ❯ </p>
    </div>
  );
}

const swipeStyle = {
  marginBottom: "10px",
};

const activityStyle = {
  height: "10vh",
  backgroundColor: "#6AC0FF",
  borderRadius: "5px",
};

const activityNameStyle = {
  position: "relative",
  top: "50%",
  transform: "translateY(-50%)",
};
