import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Dashboard from "./components/dashboard/Dashboard";
import IdeaDetails from "./components/ideas/IdeaDetails";
import Navbar from "./components/layout/Navbar";
import Signin from "./components/auth/Signin";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <Switch>
            <Route exact path="/" component={Dashboard} />
            <Route path="/idea/:id" component={IdeaDetails} />
            <Route path="/signin" component={Signin} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
