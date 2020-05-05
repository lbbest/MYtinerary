/*import actions*/
import { SET_USER } from "../actions/authActions";

/*set initial state*/
const initialState = { currentUser: {}, isLoggedIn: false };

/*assign user token to Redux store*/
function auth(state = initialState, action) {
  switch (action.type) {
    case SET_USER:
      state = Object.assign({}, state, {
        currentUser: action.payload,
        isLoggedIn: true,
      });
      break;
    // no default
  }
  return state;
}

export default auth;
