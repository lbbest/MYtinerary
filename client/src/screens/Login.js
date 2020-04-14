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
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </p>
          <Loginform />
          <p>
            Don't have an account yet?<br></br>
            <Link to="createaccount" style={loginLinkStyle}>
              Create an account
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

const loginLinkStyle = {
  textDecoration: "none",
  color: "#3c91e6",
};
