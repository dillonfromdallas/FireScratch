import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Dashboard from "./components/dashboard/Dashboard";
import Navbar from "./components/layout/Navbar";
import IdeaDetails from "./components/ideas/IdeaDetails";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <Switch>
            <Route exact path="/" component={Dashboard} />
            <Route path="/idea/:id" component={IdeaDetails} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
