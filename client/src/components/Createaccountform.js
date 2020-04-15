import React, { Component } from "react";

export class Createaccountform extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      email: "",
      picture: "",
      password: "",
    };

    this.setField = this.setField.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  setField(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleSubmit(e) {
    console.log("An account was created");
    console.log(this.state.username);
    console.log(this.state.email);
    console.log(this.state.picture);
    console.log(this.state.password);
    e.preventDefault();
  }

  render() {
    return (
      <form
        className="login-form"
        id="create-account-form"
        onChange={this.setField}
        onSubmit={this.handleSubmit}
      >
        <div className="login-field" id="create-account-username">
          <input
            type="text"
            placeholder="Username"
            name="username"
            value={this.state.username}
            required
          />
        </div>
        <div className="login-field" id="create-account-email">
          <input
            type="text"
            placeholder="Email"
            name="email"
            value={this.state.email}
            required
          />
        </div>
        <div className="login-field" id="create-account-picture">
          <input
            type="text"
            placeholder="Picture (URL)"
            name="picture"
            value={this.state.picture}
            required
          />
        </div>
        <div className="login-field" id="create-account-password">
          <input
            type="password"
            placeholder="Password"
            name="password"
            value={this.state.password}
            required
          />
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
    );
  }
}

export default Createaccountform;
