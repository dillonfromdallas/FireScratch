import React, { Component } from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import { Redirect } from "react-router-dom";
import SignedInLinks from "../layout/SignedInLinks";
import { firestoreConnect } from "react-redux-firebase";
import IdeaList from "../ideas/IdeaList";

class Profile extends Component {
  render() {
    const {
      auth,
      auth: { uid },
      ideas
    } = this.props;
    console.log(ideas);
    if (!uid) return <Redirect to="home" />;
    let myIdeas;
    if (ideas) myIdeas = ideas.filter(each => each.authorID === uid);
    return (
      <div className="bg-brand-red">
        <div className="container">
          <div className="row action-row">
            <SignedInLinks Profile />
          </div>
          {myIdeas && <IdeaList ideas={myIdeas} />}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  auth: state.firebase.auth,
  ideas: state.firestore.ordered.ideas
});

export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    {
      collection: "ideas"
    }
  ])
)(Profile);
