import { combineReducers } from "redux";
import citiesReducer from "./citiesReducer";
import itineraryReducer from "./itineraryReducer";
import authReducer from "./authReducer";

/*combine reducers to bring into state store*/
const rootReducer = combineReducers({
  cities: citiesReducer,
  itineraries: itineraryReducer,
  auth: authReducer,
});
export default rootReducer;
