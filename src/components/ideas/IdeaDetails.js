import React from "react";
import { compose } from "redux";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import moment from "moment";

const IdeaDetails = props => {
  const { idea } = props;
  if (idea) {
    return (
      <div className="container section project-details">
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
    );
  } else {
    return (
      <div className="container center">
        <p>Loading Project...</p>
      </div>
    );
  }
};

const mapStateToProps = (state, ownProps) => {
  const { id } = ownProps.match.params;
  const ideas = state.firestore.data.ideas;
  const selectedIdea = ideas ? ideas[id] : null;
  return {
    idea: selectedIdea
  };
};

export default compose(
  connect(mapStateToProps),
  firestoreConnect([{ collection: "ideas" }])
)(IdeaDetails);
