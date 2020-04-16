import React from "react";
import { Link } from "react-router-dom";
import Nav from "../components/Nav";
import Createaccountform from "../components/Createaccountform";

/*create account screen structure*/
export default function CreateAcc() {
  return (
    <div>
      <Nav />
      <div className="content">
        <div className="login-content">
          <h1>Create Account</h1>
          <p className="login-hello">
            Enter your details below and enjoy full access to all of our
            features!
          </p>
          <Createaccountform />
          <p>
            Already have an account?<br></br>
            <Link to="login" className="login-switch">
              Log in
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
