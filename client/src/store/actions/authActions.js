import axios from "axios";

/*action types*/
export const LOGIN_REQUESTED = "LOGIN_REQUESTED";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAILED = "LOGIN_FAILED";

/*redux action to log user in*/
export function login(credentials) {
  return function (dispatch) {
    dispatch({
      type: LOGIN_REQUESTED,
    });
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
        const jwttoken = response.data;
        localStorage.setItem("token", jwttoken.token);
        dispatch({
          type: LOGIN_SUCCESS,
          payload: jwttoken.token,
        });
      })
      .catch((error) =>
        dispatch({
          type: LOGIN_FAILED,
          payload: error,
        })
      );
  };
}
