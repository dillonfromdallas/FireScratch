import React, { Component } from "react";

class IdeaSummary extends Component {
  render() {
    return (
      <div className="card z-depth-0 project-summary">
        <div className="card-content grey-text text-darken-3">
          <span className="card-title">{this.props.title}</span>
          <p>By: {this.props.user}</p>
          <p className="grey-text">{this.props.date}</p>
        </div>
      </div>
    );
  }
}

export default IdeaSummary;
