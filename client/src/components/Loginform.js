import React, { Component } from "react";
import axios from "axios";
import SimpleReactValidator from "simple-react-validator";

export class Loginform extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
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

    // axios request
    await axios({
      method: "post",
      url: "http://localhost:5000/users/login",
      data: {
        email: this.state.email,
        password: this.state.password,
      },
    })
      .then((res) => {
        // console.log(res);
        console.log(res.data);
        window.location = "http://localhost:3000/";
      })
      .catch((err) => {
        console.log(err);
      });
  }

  render() {
    return (
      <form
        className="login-form"
        id="login-form"
        onChange={this.setField}
        onSubmit={this.handleSubmit}
        method="post"
        action="http://localhost:5000/users/login"
      >
        <div className="login-field" id="login-email">
          <input
            type="text"
            placeholder="Email"
            name="email"
            value={this.state.email}
            onChange={this.setField}
          />
          {/*email required for login*/}
          {this.validator.message("email", this.state.email, "required")}
        </div>
        <div className="login-field" id="login-password">
          <input
            type="password"
            placeholder="Password"
            name="password"
            value={this.state.password}
            onChange={this.setField}
          />
          {/*password required for login*/}
          {this.validator.message("password", this.state.password, "required")}
        </div>
        <button
          type="submit"
          form="login-form"
          value="Submit"
          className="login-btn"
          id="login-submit"
        >
          <strong>Log In</strong>
        </button>
      </form>
    );
  }
}

export default Loginform;
