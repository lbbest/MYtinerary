import React from "react";
import { Link } from "react-router-dom";

/*nav component structure*/
export default function Nav() {
  return (
    <div>
      <div id="nav" style={navStyle}>
        <Link to="/" style={bareLink}>
          Home
        </Link>
        <Link to="/cities" style={bareLink}>
          Cities
        </Link>
        <Link to="/login" style={bareLink}>
          Log In
        </Link>
      </div>
    </div>
  );
}

/*nav component styles*/
const navStyle = {
  display: "flex",
  justifyContent: "space-around",
  height: "75px",
  width: "100%",
  // borderBottom: "#2f394d solid 3px",
  alignItems: "center",
  fontSize: "1.5em",
  position: "fixed",
  top: "0",
  backgroundColor: "#3c91e6",
  zIndex: "998",
};

const bareLink = {
  textDecoration: "none",
  color: "white",
};
