import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Nav from "../components/Nav";

/*landing page screen structure*/
export class Landing extends Component {
  // conditional rendering of homepage if user is logged in
  render() {
    // console.log(this.props);
    const userData = this.props.userData.isLoggedIn ? (
      <div>
        <img
          id="hello-pic"
          src={this.props.userData.currentUser.picture}
          alt="Profile Avatar"
        ></img>
        <h2>Welcome, {this.props.userData.currentUser.username}!</h2>
      </div>
    ) : (
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
    );

    return (
      <div>
        <Nav />
        <div id="homepage">
          <div id="hello">
            <h1 className="logo">MYtinerary</h1>
            <div>{userData}</div>
            <p>
              Find your perfect trip, curated by insiders who know and love
              their cities.
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
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    userData: state.auth,
  };
};

export default connect(mapStateToProps, null)(Landing);

/*landing page screen styles*/
const loginStyle = {
  display: "flex",
  justifyContent: "space-around",
};

const proceedStyle = {
  height: "100px",
  width: "100px",
  backgroundColor: "rgba(47, 57, 77, 0.4)",
  padding: "10px",
  borderRadius: "50%",
};

const whiteLink = {
  textDecoration: "none",
  color: "white",
};
