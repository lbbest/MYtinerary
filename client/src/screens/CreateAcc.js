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
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </p>
          <Createaccountform />
          <p>
            Already have an account?<br></br>
            <Link to="login" style={loginLinkStyle}>
              Log in
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

const loginLinkStyle = {
  textDecoration: "none",
  color: "red",
};
