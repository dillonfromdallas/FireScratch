import React, { Component } from "react";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";
import { NavLink } from "react-router-dom";

import IdeaList from "../ideas/IdeaList";
import Notifications from "./Notifications";
import SignedInLinks from "../layout/SignedInLinks";
import SignedOutLinks from "../layout/SignedOutLinks";

class Dashboard extends Component {
  constructor() {
    super();
    this.state = {
      body: ""
    };
    this.onChange = this.onChange.bind(this);
  }

  onChange = e => {
    this.setState({
      [e.target.id]: e.target.value
    });
  };
  render() {
    //console.log(this.props);
    const {
      ideas,
      auth: { uid }
    } = this.props;

    return (
      <div className="bg-brand-red">
        <div className="dashboard container">
          <div className="col s12">
            <div className="row action-row">
              {uid ? <SignedInLinks /> : <SignedOutLinks />}
            </div>
          </div>
          <div className="row">
            <div className="col s12">
              <IdeaList ideas={ideas} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    ideas: state.firestore.ordered.ideas,
    auth: state.firebase.auth
  };
};

export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    {
      collection: "ideas"
    }
  ])
)(Dashboard);
