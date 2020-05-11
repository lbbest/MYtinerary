import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

/*nav component structure*/
export class Nav extends Component {
  /*LOG OUT FUNCTION CALLED HERE*/

  render() {
    const userData = this.props.userData.isLoggedIn ? (
      <div style={bareLink}>Log Out</div>
    ) : (
      <Link to="/login" style={bareLink}>
        Log In
      </Link>
    );

    return (
      <div>
        <div id="nav" style={navStyle}>
          <Link to="/" style={bareLink}>
            Home
          </Link>
          <Link to="/cities" style={bareLink}>
            Cities
          </Link>
          <div>{userData}</div>
        </div>
      </div>
    );
  }
}

/*subscribe Nav to recognise if user is logged in*/
const mapStateToProps = (state) => {
  return {
    userData: state.auth,
  };
};

export default connect(mapStateToProps, null)(Nav);

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
