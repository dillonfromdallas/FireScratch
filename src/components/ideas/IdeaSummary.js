import React from "react";

const IdeaSummary = ({ idea }) => {
  return (
    <div className="card z-depth-0 project-summary">
      <div className="card-content grey-text text-darken-3">
        <span className="card-title">{idea.title}</span>
        <p>{idea.body}</p>
        <p className="grey-text">
          By: {idea.userFirstName} {idea.userLastName}
        </p>
        <p className="grey-text">Today</p>
      </div>
    </div>
  );
};

export default IdeaSummary;
