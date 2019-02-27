import React from "react";
import { compose } from "redux";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { withRouter } from "react-router-dom";
import moment from "moment";
import { getProfile } from "../../redux/actions/profileActions";

class IdeaDetails extends React.Component {
  render() {
    const { idea, getProfile, history } = this.props;
    console.log(this.props);
    if (idea) {
      return (
        <div className="container section project-details">
          <div className="card z-depth-0">
            <div className="card-content">
              <span className="card-title">{idea.title}</span>
              <p>{idea.body}</p>
            </div>
            <div className="card-action lighten-4 grey-text">
              <p onClick={() => getProfile(idea.authorID, history)}>
                Posted by {idea.authorName}
              </p>
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
  }
}

const mapStateToProps = (state, ownProps) => {
  const { id } = ownProps.match.params;
  const ideas = state.firestore.data.ideas;
  const selectedIdea = ideas ? ideas[id] : null;
  return {
    idea: selectedIdea
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getProfile: (uid, history) => dispatch(getProfile(uid, history))
  };
};

export default compose(
  connect(
    mapStateToProps,
    mapDispatchToProps
  ),
  firestoreConnect([{ collection: "ideas" }])
)(withRouter(IdeaDetails));

// Breaking for exhaustion lol. Line 22 is throwing the below error.
// Error: Actions must be plain objects. Use custom middleware for async actions.
