import React from "react";
import { Link } from "react-router-dom";

/*city component structure*/
export default function City(props) {
  const city = props.city;
  return (
    <div className="city">
      <Link to={`/itineraries/${city.name}`} style={cityStyle}>
        <h2 style={cityName}>{city.name}</h2>
        <h3 style={cityCountry}>{city.country}</h3>
        <img src={city.img} alt={city.name} style={cityImg}></img>
      </Link>
    </div>
  );
}

/*city component styles*/
const cityStyle = {
  maxWidth: "100%",
  height: "125px",
  display: "grid",
  gridTemplateRows: "50% 50%",
  gridTemplateColumns: "70% 30%",
  textDecoration: "none",
  border: "solid grey 1px",
  borderRadius: "5px",
  margin: "20px 5px",
};

const cityName = {
  gridColumn: "1/2",
  gridRow: "1/2",
  margin: "auto",
  textAlign: "center",
  fontSize: "2em",
  color: "black",
};

const cityCountry = {
  gridColumn: "1/2",
  gridRow: "2/3",
  margin: "auto",
  textAlign: "center",
  color: "#A9A9A9",
};

const cityImg = {
  gridColumn: "2/3",
  gridRow: "1/3",
  borderLeft: "1px solid grey",
  objectFit: "cover",
  width: "100%",
  height: "100%",
};
