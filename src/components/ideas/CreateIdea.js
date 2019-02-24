import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router";

import { createIdea } from "../../redux/actions/ideaActions";

class CreateIdea extends Component {
  constructor() {
    super();
    this.state = {
      title: "",
      body: ""
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }
  onChange = e => {
    this.setState({
      [e.target.id]: e.target.value
    });
  };
  onSubmit = e => {
    e.preventDefault();
    this.props.createIdea(this.state, this.props.history);
  };

  render() {
    return (
      <div className="container">
        <form onSubmit={this.onSubmit} className="white">
          <h5 className="grey-text text-darken-3">New Idea</h5>

          <div className="input-field">
            <label htmlFor="title">Title</label>
            <input type="text" id="title" onChange={this.onChange} />
          </div>

          <div className="input-field">
            <label htmlFor="body">Idea Details</label>
            <textarea
              id="body"
              className="materialize-textarea"
              onChange={this.onChange}
            />
          </div>

          <div className="input-field">
            <button className="btn pink lighten-1 z-depth-0">Submit</button>
          </div>
        </form>
      </div>
    );
  }
}

export default connect(
  null,
  { createIdea }
)(withRouter(CreateIdea));
