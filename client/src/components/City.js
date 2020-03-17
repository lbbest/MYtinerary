import React from "react";

export default function City(props) {
  const city = props.city;
  return (
    <div className="city">
      <h2>{city.country}</h2>
      <h3>{city.name}</h3>
    </div>
  );
}
