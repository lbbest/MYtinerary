/*import actions*/
import {
  ITINERARY_REQUESTED,
  ITINERARY_RECEIVED,
  ITINERARY_FAILED
} from "../actions/itineraryActions";

/*set initial state*/
const initialState = { data: [], status: "" };

/*assign database collection to data object array in Redux store*/
function itineraries(state = initialState, action) {
  switch (action.type) {
    case ITINERARY_REQUESTED:
      state = Object.assign({}, state, { status: "waiting" });
      break;
    case ITINERARY_RECEIVED:
      state = Object.assign({}, state, {
        data: [...action.payload],
        status: "received"
      });
      break;
    case ITINERARY_FAILED:
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

export default itineraries;
