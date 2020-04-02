import React from "react";

export default function Itin(props) {
  const itin = props.itinerary;
  return (
    <div className="itin">
      <h2>{itin.title}</h2>
    </div>
  );
}
