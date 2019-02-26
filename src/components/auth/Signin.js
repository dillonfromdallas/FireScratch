import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import { loginUser } from "../../redux/actions/authActions";

class Signin extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
      errors: {}
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  static getDerivedStateFromProps(nextProps) {
    if (nextProps.errors) {
      return { errors: nextProps.errors };
    }
  }

  onChange = e => {
    this.setState({
      [e.target.id]: e.target.value
    });
  };

  onSubmit = e => {
    e.preventDefault();
    const { email, password } = this.state;
    this.props.loginUser({ email, password }, this.props.history);
  };

  renderErrors() {
    const err = this.state.errors;
    return <div className="card-panel red white-text">{err.message}</div>;
  }

  render() {
    const errorsToDisplay = !!Object.keys(this.state.errors).length;
    return (
      <div className="container">
        <form onSubmit={this.onSubmit} className="white">
          <h5 className="grey-text text-darken-3">Sign In</h5>
          <div className="input-field">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" onChange={this.onChange} />
          </div>
          <div className="input-field">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" onChange={this.onChange} />
          </div>
          <div className="input-field">
            <button className="btn pink lighten-1 z-depth-0">Log In</button>
          </div>
        </form>
        {errorsToDisplay && this.renderErrors()}
      </div>
    );
  }
}

Signin.propTypes = {
  errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  errors: state.errors
});

export default connect(
  mapStateToProps,
  { loginUser }
)(withRouter(Signin));
