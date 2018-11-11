import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import CreateIdea from "./components/ideas/CreateIdea";
import Dashboard from "./components/dashboard/Dashboard";
import IdeaDetails from "./components/ideas/IdeaDetails";
import Navbar from "./components/layout/Navbar";
import Signin from "./components/auth/Signin";
import Signup from "./components/auth/Signup";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <Switch>
            <Route exact path="/" component={Dashboard} />
            <Route path="/idea/new" component={CreateIdea} />
            <Route path="/idea/:id" component={IdeaDetails} />
            <Route path="/signin" component={Signin} />
            <Route path="/signup" component={Signup} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
