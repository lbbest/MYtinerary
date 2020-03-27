import React from "react";
import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Landing from "./screens/Landing";
import Cities from "./screens/Cities";
import Login from "./screens/Login";
import CreateAcc from "./screens/CreateAcc";

function App() {
  return (
    /*router*/
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route exact path="/" component={Landing} />
          <Route path="/cities" component={Cities} />
          <Route path="/login" component={Login} />
          <Route path="/createaccount" component={CreateAcc} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
