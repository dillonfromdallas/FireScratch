import React from "react";

import IdeaSummary from "./IdeaSummary";

const IdeaList = () => {
  return (
    <div className="project-list section">
      <IdeaSummary
        title="Build this app"
        user="Main Dev"
        date="Nov. 11, 2018"
      />
      <IdeaSummary
        title="Learn Garage Band"
        user="Musician"
        date="Nov. 1, 2018"
      />
      <IdeaSummary
        title="New Italian Dish Idea"
        user="youseenchef"
        date="Apr. 1, 2018"
      />
      <IdeaSummary
        title="Esperanto Programming Language"
        user="LangGuy1990"
        date="Feb. 17, 2018"
      />
    </div>
  );
};

export default IdeaList;
