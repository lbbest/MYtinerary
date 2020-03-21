import React from "react";

export default function City(props) {
  const city = props.city;
  return (
    <div className="city" style={cityStyle}>
      <h2 style={cityName}>{city.name}</h2>
      <h3 style={cityCountry}>{city.country}</h3>
      <img src={city.img} alt={city.name} style={cityImg}></img>
    </div>
  );
}

const cityStyle = {
  width: "100%",
  height: "15vh",
  display: "grid",
  gridTemplateRows: "50% 50%",
  gridTemplateColumns: "70% 30%",
  border: "1px solid black"
};

const cityName = {
  gridColumn: "1/2",
  gridRow: "1/2",
  margin: "auto",
  textAlign: "center",
  fontSize: "2em"
};

const cityCountry = {
  gridColumn: "1/2",
  gridRow: "2/3",
  margin: "auto",
  textAlign: "center"
};

const cityImg = {
  gridColumn: "2/3",
  gridRow: "1/3",
  borderLeft: "1px solid black"
};
