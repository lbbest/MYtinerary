import { combineReducers } from "redux";
import citiesReducer from "./citiesReducer";
import itineraryReducer from "./itineraryReducer";
/*combine city and itinerary reducers to bring both into state store*/
const rootReducer = combineReducers({
  cities: citiesReducer,
  itineraries: itineraryReducer
});
export default rootReducer;
