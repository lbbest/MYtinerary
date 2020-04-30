/*import actions*/
import {
  LOGIN_REQUESTED,
  LOGIN_SUCCESS,
  LOGIN_FAILED,
} from "../actions/authActions";

/*set initial state*/
const initialState = { token: "", status: "" };

/*assign user token to Redux store*/
function auth(state = initialState, action) {
  switch (action.type) {
    case LOGIN_REQUESTED:
      state = Object.assign({}, state, { status: "waiting" });
      break;
    case LOGIN_SUCCESS:
      state = Object.assign({}, state, {
        token: action.payload,
        status: "success",
      });
      break;
    case LOGIN_FAILED:
      state = Object.assign({}, state, {
        status: "failed",
        error: action.payload,
      });
      break;
    // no default
  }
  return state;
}

export default auth;
