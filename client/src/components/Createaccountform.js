import React, { Component } from "react";
import axios from "axios";

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

  setField(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  async handleSubmit(event) {
    event.preventDefault();
    await axios({
      method: "post",
      url: "http://localhost:5000/users/",
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
      <form
        className="login-form"
        id="create-account-form"
        onChange={this.setField}
        onSubmit={this.handleSubmit}
        method="POST"
        action="http://localhost:5000/users/"
      >
        <div className="login-field" id="create-account-username">
          <input
            type="text"
            pattern="[a-zA-Z0-9]+"
            placeholder="Username"
            name="username"
            value={this.state.username}
            onChange={this.setField}
            required
          />
        </div>
        <div className="login-field" id="create-account-email">
          <input
            type="email"
            placeholder="Email"
            name="email"
            value={this.state.email}
            onChange={this.setField}
            required
          />
        </div>
        <div className="login-field" id="create-account-picture">
          <input
            type="url"
            placeholder="Picture (URL)"
            name="picture"
            value={this.state.picture}
            onChange={this.setField}
            required
          />
        </div>
        <div className="login-field" id="create-account-password">
          <input
            type="password"
            minLength="8"
            placeholder="Password"
            name="password"
            value={this.state.password}
            onChange={this.setField}
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
