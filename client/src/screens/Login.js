import React from "react";
import { Link } from "react-router-dom";
import Nav from "../components/Nav";

/*login page structure*/
export default function Login() {
  return (
    <div>
      <Nav />
      <div className="content">
        <h1>Log In</h1>
        <p>
          Don't have an account? <br></br>
          <Link to="/createaccount">Create an account</Link>
        </p>
      </div>
    </div>
  );
}
