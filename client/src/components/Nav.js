import React from "react";
import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <div>
      <div id="nav" style={navStyle}>
        <Link to="/">Home</Link>
        <Link to="/cities">Cities</Link>
      </div>
    </div>
  );
}

const navStyle = {
  display: "flex",
  justifyContent: "space-around",
  height: "75px",
  width: "100%",
  borderBottom: "#f1f1f1 solid 3px",
  alignItems: "center",
  fontSize: "1.5em"
};
