import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { composeWithDevTools } from "redux-devtools-extension";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import { getCityAction } from "./store/actions/cityActions";
import rootReducer from "./store/reducers/rootReducer";
import { getItineraryAction } from "./store/actions/itineraryActions";

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

ReactDOM.render(
  /*wrap Redux store around app*/
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

/*dispatch retrieve cities and itineraries actions to store*/
store.dispatch(getCityAction());
store.dispatch(getItineraryAction());

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
