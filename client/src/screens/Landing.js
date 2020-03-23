import React from "react";
import { Link } from "react-router-dom";
import Nav from "../components/Nav";
import Popular from "../components/Popular";

export default function Landing() {
  return (
    <div>
      <Nav />
      <div className="content">
        <div id="hello">
          <h1 className="logo">MYtinerary</h1>
          <div id="login" style={loginStyle}>
            <button>
              <Link to="/login" style={whiteLink}>
                Log In
              </Link>
            </button>
            <button>
              <Link to="/createaccount" style={whiteLink}>
                Create Account
              </Link>
            </button>
          </div>
          <p>
            Find your perfect trip, curated by insiders who know and love their
            cities.
          </p>
          <h2>Start planning your trip now!</h2>
          <Link to="/cities">
            <img
              id="proceed"
              src="././Content/Images/arrow.png"
              alt="Proceed"
              style={proceedStyle}
            ></img>
          </Link>
        </div>
      </div>
      <Popular />
    </div>
  );
}

const loginStyle = {
  display: "flex",
  justifyContent: "space-around"
};

const proceedStyle = {
  height: "100px",
  width: "100px",
  backgroundColor: "rgba(100, 100, 100, 0.4)",
  padding: "10px",
  borderRadius: "50%"
};

const whiteLink = {
  textDecoration: "none",
  color: "white"
};
