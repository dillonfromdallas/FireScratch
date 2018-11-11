import React from "react";

const IdeaDetails = props => {
  const { id } = props.match.params;
  return (
    <div className="container section project-details">
      <div className="card z-depth-0">
        <div className="card-content">
          <span className="card-title">Project Title - {id}</span>
          <p>Lorem Blah Blah Blah</p>
        </div>
        <div className="card-action lighten-4 grey-text">
          <div>Posted by Main Dev</div>
          <div>Nov. 11, 2018</div>
        </div>
      </div>
    </div>
  );
};

export default IdeaDetails;
