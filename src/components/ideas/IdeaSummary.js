import React from "react";
import moment from "moment";

const IdeaSummary = ({ idea }) => {
  return (
    <div className="card z-depth-0 project-summary">
      <div className="card-content grey-text text-darken-3">
        <span className="card-title">{idea.title}</span>
        <p>{idea.body}</p>
        <p className="grey-text">By: {idea.authorName}</p>
        <p className="grey-text">
          {moment(idea.createdAt.toDate()).calendar()}
        </p>
      </div>
    </div>
  );
};

export default IdeaSummary;
