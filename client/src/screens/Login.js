import React from "react";
import { Link } from "react-router-dom";
import Nav from "../components/Nav";
import Loginform from "../components/Loginform";

/*login page structure*/
export default function Login() {
  return (
    <div>
      <Nav />
      <div className="content">
        <div className="login-content">
          <h1>Log In</h1>
          <p className="login-hello">
            Welcome back! Log in to access your MYtinerary account.
          </p>
          <Loginform />
          <p>
            Don't have an account yet?<br></br>
            <Link to="createaccount" className="login-switch">
              Create an account
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
