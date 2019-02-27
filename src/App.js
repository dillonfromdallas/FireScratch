import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import CreateIdea from "./components/ideas/CreateIdea";
import Dashboard from "./components/dashboard/Dashboard";
import IdeaDetails from "./components/ideas/IdeaDetails";
import Navbar from "./components/layout/Navbar";
import Signin from "./components/auth/Signin";
import Signup from "./components/auth/Signup";
import Landing from "./components/layout/Landing";
import Profile from "./components/profile/Profile";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Switch>
            <Route exact path="/" component={Landing} />
            <Route path="/signin" component={Signin} />
            <Route path="/signup" component={Signup} />
            <Navbar />
          </Switch>
          <Switch>
            <Route exact path="/home" component={Dashboard} />
            <Route path="/idea/new" component={CreateIdea} />
            <Route path="/idea/:id" component={IdeaDetails} />
            <Route path="/user/:id" component={Profile} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
