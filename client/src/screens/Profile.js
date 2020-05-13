import React, { Component } from "react";
import { connect } from "react-redux";
import Nav from "../components/Nav";
import { logout } from "../store/actions/authActions";

export class Profile extends Component {
  render() {
    const user = this.props.userData.currentUser;
    return (
      <div>
        <Nav />
        <div className="content">
          <div className="user-details">
            <img src={user.picture} alt="Profile Avatar"></img>
            <h2>{user.username}</h2>
            {/*NEED TO UPDATE USER POST ROUTE TO RETRIEVE EMAIL AND PASSWORD BEFORE IT CAN BE DISPLAYED HERE*/}
          </div>
          <div
            onClick={() => {
              this.props.logout();
            }}
          >
            <p>Log Out</p>
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

/*dispatch logout action mapped to props*/
const mapDispatchToProps = (dispatch) => ({
  logout: () => dispatch(logout()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
