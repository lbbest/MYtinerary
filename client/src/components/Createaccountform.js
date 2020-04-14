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
  }
  render() {
    return (
      <form className="login-form" id="create-account-form">
        <div className="login-field" id="create-account-username">
          <input type="text" placeholder="Username" required />
        </div>
        <div className="login-field" id="create-account-email">
          <input type="text" placeholder="Email" required />
        </div>
        <div className="login-field" id="create-account-picture">
          <input type="text" placeholder="Picture (URL)" required />
        </div>
        <div className="login-field" id="create-account-password">
          <input type="text" placeholder="Password" required />
        </div>
        <button type="submit" className="login-btn" id="create-account-submit">
          <strong>Create Account</strong>
        </button>
      </form>
    );
  }
}

export default Createaccountform;
