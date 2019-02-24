import React from "react";
import { Link } from "react-router-dom";
import IdeaSummary from "./IdeaSummary";

const IdeaList = ({ ideas }) => {
  return (
    <div className="project-list section">
      {ideas &&
        ideas.map(idea => {
          return (
            <Link to={`/idea/${idea.id}`} key={idea.id}>
              <IdeaSummary idea={idea} />
            </Link>
          );
        })}
    </div>
  );
};

export default IdeaList;
