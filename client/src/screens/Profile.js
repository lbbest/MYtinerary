import React, { Component } from "react";
import { connect } from "react-redux";
import Nav from "../components/Nav";
import { logout } from "../store/actions/authActions";
import axios from "axios";
import SimpleReactValidator from "simple-react-validator";

export class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // state for hiding or showing forms
      showPictureDiv: true,
      showUserDiv: true,
      showEmailDiv: true,
      showPasswordDiv: true,
      // state for holding form inputs
      newusername: "",
      newemail: "",
      newpicture: "",
      newpassword: "",
    };

    // form function for setting state and handling submit
    this.setField = this.setField.bind(this);
    this.handleSubmitPicture = this.handleSubmitPicture.bind(this);
    this.handleSubmitUser = this.handleSubmitUser.bind(this);
    this.handleSubmitEmail = this.handleSubmitEmail.bind(this);

    // imported validation library
    this.validator = new SimpleReactValidator();
  }

  // function that sets state upon user form input
  setField(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  // function for submitting picture form
  async handleSubmitPicture(event) {
    event.preventDefault();

    // checks form validation and returns error messages if not valid inputs
    if (!this.validator.fieldValid("picture")) {
      this.validator.showMessageFor("picture");
      this.forceUpdate();
    } else if (
      // if all valid, put data to server
      window.confirm("This action will log you out. Proceed?")
    ) {
      // Set object to be sent in post request body
      const picture = {
        picture: this.props.userData.currentUser.picture,
        newpicture: this.state.newpicture,
      };
      console.log(picture);

      // Send put request to server
      axios
        .put("http://localhost:5000/users/picture/", picture)
        .then((response) => {
          console.log(response);
        })
        .then((error) => {
          console.log(error);
        });

      // logout user after update
      this.props.logout();
    }
  }

  // function for submitting username form
  async handleSubmitUser(event) {
    event.preventDefault();

    // checks form validation and returns error messages if not valid inputs
    if (!this.validator.fieldValid("username")) {
      this.validator.showMessageFor("username");
      this.forceUpdate();
    } else if (
      // if all valid, post data to server
      window.confirm("This action will log you out. Proceed?")
    ) {
      // Set object to be sent in post request body
      const username = {
        username: this.props.userData.currentUser.username,
        newusername: this.state.newusername,
      };
      console.log(username);
      // Send put request to server
      axios
        .put("http://localhost:5000/users/username/", username)
        .then((response) => {
          console.log(response);
        })
        .then((error) => {
          console.log(error);
        });

      // logout user after update
      this.props.logout();
    }
  }

  // function for submitting email form
  async handleSubmitEmail(event) {
    event.preventDefault();

    // checks form validation and returns error messages if not valid inputs
    if (!this.validator.fieldValid("email")) {
      this.validator.showMessageFor("email");
      this.forceUpdate();
    } else if (
      // if all valid, post data to server
      window.confirm("This action will log you out. Proceed?")
    ) {
      // Set object to be sent in post request body
      const email = {
        email: this.props.userData.currentUser.email,
        newemail: this.state.newemail,
      };
      console.log(email);

      // Send put request to server
      axios
        .put("http://localhost:5000/users/email/", email)
        .then((response) => {
          console.log(response);
        })
        .then((error) => {
          console.log(error);
        });

      // logout user after update
      this.props.logout();
    }
  }

  render() {
    // props from redux store to display user information
    const user = this.props.userData.currentUser;

    // variables for showing or hiding form divs
    const { showUserDiv } = this.state;
    const { showEmailDiv } = this.state;
    const { showPictureDiv } = this.state;
    const { showPasswordDiv } = this.state;
    return (
      <div>
        <Nav />
        <div className="content">
          <div className="user-details">
            {/*User Picture*/}
            <div className="profile-section">
              <img
                src={user.picture}
                alt="Profile Avatar"
                className="user-picture"
              ></img>
              {/*Show edit button OR form dependent on state*/}
              {showPictureDiv ? (
                <p
                  className="edit-btn"
                  onClick={() =>
                    this.setState({ showPictureDiv: !showPictureDiv })
                  }
                >
                  Edit
                </p>
              ) : (
                <div>
                  <p
                    className="cancel-btn"
                    onClick={() =>
                      this.setState({ showPictureDiv: !showPictureDiv })
                    }
                  >
                    Cancel
                  </p>
                  <form
                    className="profile-form"
                    id="profilePictureForm"
                    onChange={this.setField}
                    onSubmit={this.handleSubmitPicture}
                    method="PUT"
                    action="http://localhost:5000/users/picture"
                  >
                    <input
                      type="text"
                      id="newpicture"
                      name="newpicture"
                      value={this.state.newpicture}
                      onChange={this.setField}
                      placeholder="New Picture (URL)"
                    ></input>
                    {/*picture required and must be url format*/}
                    {this.validator.message(
                      "picture",
                      this.state.newpicture,
                      "required|url"
                    )}
                    <button
                      type="submit"
                      form="profilePictureForm"
                      value="submit"
                      className="submit-btn"
                    >
                      Submit
                    </button>
                  </form>
                </div>
              )}
            </div>

            {/*User Username*/}
            <div className="profile-section">
              <h2>{user.username}</h2>
              {/*Show edit button OR form dependent on state*/}
              {showUserDiv ? (
                <p
                  className="edit-btn"
                  onClick={() => this.setState({ showUserDiv: !showUserDiv })}
                >
                  Edit
                </p>
              ) : (
                <div>
                  <p
                    className="cancel-btn"
                    onClick={() => this.setState({ showUserDiv: !showUserDiv })}
                  >
                    Cancel
                  </p>
                  <form
                    className="profile-form"
                    id="profileUserForm"
                    onChange={this.setField}
                    onSubmit={this.handleSubmitUser}
                    method="PUT"
                    action="http://localhost:5000/users/username"
                  >
                    <input
                      type="text"
                      id="newusername"
                      name="newusername"
                      value={this.state.newusername}
                      onChange={this.setField}
                      placeholder="New Username"
                    ></input>
                    {/*username required and only alphanum characters*/}
                    {this.validator.message(
                      "username",
                      this.state.newusername,
                      "required|alpha_num"
                    )}
                    <button
                      type="submit"
                      form="profileUserForm"
                      value="submit"
                      className="submit-btn"
                    >
                      Submit
                    </button>
                  </form>
                </div>
              )}
            </div>

            {/*User Email*/}
            <div className="profile-section">
              <h2>{user.email}</h2>
              {/*Show edit button OR form dependent on state*/}
              {showEmailDiv ? (
                <p
                  className="edit-btn"
                  onClick={() => this.setState({ showEmailDiv: !showEmailDiv })}
                >
                  Edit
                </p>
              ) : (
                <div>
                  <p
                    className="cancel-btn"
                    onClick={() =>
                      this.setState({ showEmailDiv: !showEmailDiv })
                    }
                  >
                    Cancel
                  </p>
                  <form
                    className="profile-form"
                    id="profileEmailForm"
                    onChange={this.setField}
                    onSubmit={this.handleSubmitEmail}
                    method="PUT"
                    action="http://localhost:5000/users/email/"
                  >
                    <input
                      type="text"
                      id="newemail"
                      name="newemail"
                      value={this.state.newemail}
                      onChange={this.setField}
                      placeholder="New Email"
                    ></input>
                    {/*email required and must be email format*/}
                    {this.validator.message(
                      "email",
                      this.state.newemail,
                      "required|email"
                    )}
                    <button
                      type="submit"
                      form="profileEmailForm"
                      value="submit"
                      className="submit-btn"
                    >
                      Submit
                    </button>
                  </form>
                </div>
              )}
            </div>

            {/*User Password*/}
            <div className="profile-section">
              <h2>Password</h2>
              {showPasswordDiv ? (
                <p
                  className="edit-btn"
                  onClick={() =>
                    this.setState({ showPasswordDiv: !showPasswordDiv })
                  }
                >
                  Change
                </p>
              ) : (
                <div>
                  <p
                    className="cancel-btn"
                    onClick={() =>
                      this.setState({
                        showPasswordDiv: !showPasswordDiv,
                      })
                    }
                  >
                    Cancel
                  </p>
                  <form className="profile-form">
                    <input type="text" placeholder="Old Password"></input>
                    <input type="text" placeholder="New Password"></input>
                    <button className="submit-btn">Submit</button>
                  </form>
                </div>
              )}
            </div>

            {/*Log Out*/}
            <div className="profile-section">
              <p
                id="logout-btn"
                onClick={() => {
                  this.props.logout();
                }}
              >
                Log Out
              </p>
            </div>
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
