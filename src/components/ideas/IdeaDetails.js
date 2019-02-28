import React from "react";
import { compose } from "redux";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import moment from "moment";
import { NavLink, withRouter } from "react-router-dom";

import SignedInLinks from "../layout/SignedInLinks";
import SignedOutLinks from "../layout/SignedOutLinks";
import { deleteIdea } from "../../redux/actions/ideaActions";

const IdeaDetails = props => {
  const {
    idea,
    auth: { uid },
    history,
    deleteIdea,
    match: {
      params: { id }
    }
  } = props;
  if (idea) {
    console.log(id);
    return (
      <div className="bg-brand-red">
        <div className="container">
          <div className="col s12">
            <div className="row action-row">
              {uid ? <SignedInLinks /> : <SignedOutLinks />}
            </div>
          </div>
          <div className="section project-details">
            <div className="card z-depth-0">
              <div className="card-content">
                <span className="card-title">{idea.title}</span>
                <p>{idea.body}</p>
              </div>
              <div className="card-action lighten-4 grey-text">
                <div>Posted by {idea.authorName}</div>
                <div>{moment(idea.createdAt.toDate()).calendar()}</div>
              </div>
            </div>
          </div>
        </div>
        {uid === idea.authorID && (
          <div className="row action-row">
            <ul>
              <li>
                <NavLink
                  className="border-button btn-large waves-effect waves-light white-text landing-button"
                  to="/"
                >
                  Back
                </NavLink>
              </li>
              <li>
                <button
                  className="border-button btn-large waves-effect waves-light white-text landing-button"
                  onClick={() => deleteIdea(id, history)}
                >
                  Delete
                </button>
              </li>
            </ul>
          </div>
        )}
      </div>
    );
  } else {
    return (
      <div className="container center">
        <p>Loading Project...</p>
      </div>
    );
  }
};

const mapDispatchToProps = dispatch => {
  return {
    deleteIdea: (idea, history) => dispatch(deleteIdea(idea, history))
  };
};

const mapStateToProps = (state, ownProps) => {
  const { id } = ownProps.match.params;
  const ideas = state.firestore.data.ideas;
  const selectedIdea = ideas ? ideas[id] : null;
  return {
    idea: selectedIdea,
    auth: state.firebase.auth
  };
};

export default compose(
  connect(
    mapStateToProps,
    mapDispatchToProps
  ),
  firestoreConnect([{ collection: "ideas" }])
)(withRouter(IdeaDetails));
