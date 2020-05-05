import axios from "axios";
import setAuthorizationToken from "../utils/setAuthorizationToken";
import jwt from "jsonwebtoken";
const jwt_decode = require("jwt-decode");

/*action types*/
export const SET_USER = "SET_USER";

export function setCurrentUser(user) {
  return {
    type: SET_USER,
    payload: user,
  };
}

/*redux action to log user in*/
export function login(credentials) {
  return function (dispatch) {
    // post credentials to users route
    axios
      .post("http://localhost:5000/users/login", credentials, {
        headers: {
          accept: "application/json",
          "content-type": "application/json",
        },
      })
      //.then((response) => response.json())
      .then((response) => {
        console.log(response);

        // grab JWTtoken from server response and set it within local storage
        const jwttoken = response.data.token;
        localStorage.setItem("token", jwttoken);

        // set authorization token in axios header
        setAuthorizationToken(jwttoken);

        // decode JWTtoken and extract user details for redux store
        const user = jwt_decode(jwttoken);
        console.log(user);

        // dispatch payload to send user details to redux store
        dispatch(setCurrentUser(jwt.decode(jwttoken)));
      });
  };
}
