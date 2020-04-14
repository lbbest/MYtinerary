import React, { Component } from "react";

export class Loginform extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <form className="login-form" id="login-form">
        <div className="login-field" id="login-email">
          <input type="text" placeholder="Email" required />
        </div>
        <div className="login-field" id="login-password">
          <input type="text" placeholder="Password" required />
        </div>
        <button type="submit" className="login-btn" id="logint-submit">
          <strong>Log In</strong>
        </button>
      </form>
    );
  }
}

export default Loginform;
