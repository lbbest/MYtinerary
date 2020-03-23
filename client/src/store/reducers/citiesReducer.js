import {
  CITY_REQUESTED,
  CITY_RECEIVED,
  CITY_FAILED
} from "../actions/cityActions";

const initialState = { data: [], status: "" };

function cities(state = initialState, action) {
  switch (action.type) {
    case CITY_REQUESTED:
      state = Object.assign({}, state, { status: "waiting" });
      break;
    case CITY_RECEIVED:
      state = Object.assign({}, state, {
        data: [...action.payload],
        status: "received"
      });
      break;
    case CITY_FAILED:
      state = Object.assign({}, state, {
        status: "failed",
        error: action.payload
      });
      break;
    // no default
  }
  return state;
}

// Bear combineReducer() in mind if adding another reducer here - will need to edit export default below

export default cities;
