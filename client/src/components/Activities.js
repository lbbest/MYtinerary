import React from "react";

export default function Activities(props) {
  const activities = props.activities;
  return (
    <div className="activities">
      {activities.map((activity) => (
        <div className="activity">
          <p>{activity}</p>
        </div>
      ))}
    </div>
  );
}
