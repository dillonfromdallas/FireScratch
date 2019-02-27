import React from "react";
import moment from "moment";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import { getProfile } from "../../redux/actions/profileActions";

class IdeaSummary extends React.Component {
  render() {
    const { idea, getProfile } = this.props;
    return (
      <div className="card project-summary">
        <div className="card-content grey-text text-darken-3">
          <span className="card-title">{idea.title}</span>
          <p>{idea.body}</p>
          <p
            className="grey-text"
            onClick={() => getProfile(idea.authorID, this.props.history)}
          >
            By: {idea.authorName}
          </p>
          <p className="grey-text">
            {moment(idea.createdAt.toDate()).calendar()}
          </p>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getProfile: (uid, history) => dispatch(getProfile(uid, history))
  };
};

export default connect(
  null,
  mapDispatchToProps
)(withRouter(IdeaSummary));
