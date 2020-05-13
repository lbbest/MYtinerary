import React from "react";
import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Landing from "./screens/Landing";
import Cities from "./screens/Cities";
import Login from "./screens/Login";
import CreateAcc from "./screens/CreateAcc";
import { Itinerary } from "./screens/Itinerary";
import Profile from "./screens/Profile";
import Add from "./screens/Add";

function App() {
  return (
    /*router*/
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route exact path="/" component={Landing} />
          <Route path="/cities" component={Cities} />
          <Route path="/itineraries/:name" component={Itinerary} />
          <Route path="/login" component={Login} />
          <Route path="/createaccount" component={CreateAcc} />
          <Route path="/profile" component={Profile} />
          <Route path="/add" component={Add} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
