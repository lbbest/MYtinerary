import React, { Component } from "react";
import axios from "axios";
import SimpleReactValidator from "simple-react-validator";

export class Createaccountform extends Component {
  constructor(props) {
    super(props);

    // create account form state
    this.state = {
      username: "",
      email: "",
      picture: "",
      password: "",
    };

    // form functions for setting state and handling submit
    this.setField = this.setField.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

    // imported validation library
    this.validator = new SimpleReactValidator();
  }

  // function that sets state upon user form input
  setField(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  // function that handles the form submission
  async handleSubmit(event) {
    event.preventDefault();

    // checks form validation and returns error messages if not valid inputs
    if (!this.validator.allValid()) {
      this.validator.showMessages();
      this.forceUpdate();
    }

    // axios post requst to user database collection
    await axios({
      method: "post",
      url: "http://localhost:5000/users/create",
      data: {
        username: this.state.username,
        email: this.state.email,
        picture: this.state.picture,
        password: this.state.password,
      },
    })
      .then((res) => {
        // console.log(res);
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  render() {
    return (
      <div className="userform">
        {/* create account form */}
        <form
          className="login-form"
          id="create-account-form"
          onChange={this.setField}
          onSubmit={this.handleSubmit}
          method="POST"
          action="http://localhost:5000/users/create"
        >
          <div className="login-field" id="create-account-username">
            <input
              type="text"
              placeholder="Username"
              name="username"
              value={this.state.username}
              onChange={this.setField}
            />
            {/*username required and only alphanum characters*/}
            {this.validator.message(
              "username",
              this.state.username,
              "required|alpha_num"
            )}
          </div>
          <div className="login-field" id="create-account-email">
            <input
              type="text"
              placeholder="Email"
              name="email"
              value={this.state.email}
              onChange={this.setField}
            />
            {/*email required and must be email format*/}
            {this.validator.message(
              "email",
              this.state.email,
              "required|email"
            )}
          </div>
          <div className="login-field" id="create-account-picture">
            <input
              type="text"
              placeholder="Picture (URL)"
              name="picture"
              value={this.state.picture}
              onChange={this.setField}
            />
            {/*picture required and must be url format*/}
            {this.validator.message("picture", this.state.picture, "url")}
          </div>
          <div className="login-field" id="create-account-password">
            <input
              type="password"
              placeholder="Password"
              name="password"
              value={this.state.password}
              onChange={this.setField}
            />
            {/*password required and must be at least 8 characters*/}
            {this.validator.message(
              "password",
              this.state.password,
              "required|min:8"
            )}
          </div>
          <button
            type="submit"
            form="create-account-form"
            value="Submit"
            className="login-btn"
            id="create-account-submit"
          >
            <strong>Create Account</strong>
          </button>
        </form>
        <a className="google-btn" href="http://localhost:5000/users/google">
          <div className="google-icon-wrapper">
            <img
              className="google-icon"
              src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
              alt="google icon"
            />
          </div>
          <p className="btn-text">
            <b>Sign in with Google</b>
          </p>
        </a>
      </div>
    );
  }
}

export default Createaccountform;
