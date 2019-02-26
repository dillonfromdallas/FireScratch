import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Redirect, withRouter } from "react-router-dom";

import { createUser } from "../../redux/actions/authActions";

class Signup extends Component {
  constructor() {
    super();
    this.state = {
      username: "",
      email: "",
      password: "",
      confirm: "",
      errors: {}
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange = e => {
    this.setState({
      [e.target.id]: e.target.value
    });
  };

  static getDerivedStateFromProps(nextProps) {
    if (nextProps.errors) {
      return { errors: nextProps.errors };
    }
  }

  onSubmit = e => {
    e.preventDefault();
    const { username, email, password } = this.state;
    this.props.createUser({ username, email, password }, this.props.history);
  };

  renderErrors() {
    const err = this.state.errors;
    return <div className="card-panel white red-text">{err.message}</div>;
  }

  render() {
    const { auth } = this.props;
    if (auth.uid) return <Redirect to="/home" />;
    const errorsToDisplay = !!Object.keys(this.state.errors).length;

    return (
      <div className="landing">
        <div className="container">
          <form onSubmit={this.onSubmit} className="">
            <div className="input-field">
              <label htmlFor="username">Username</label>
              <input type="text" id="username" onChange={this.onChange} />
            </div>

            <div className="input-field">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" onChange={this.onChange} />
            </div>
            <div className="input-field">
              <label htmlFor="password">Password</label>
              <input type="password" id="password" onChange={this.onChange} />
            </div>

            <div className="input-field">
              <button className="border-button btn-large waves-effect waves-light white-text landing-button">
                Sign Up
              </button>{" "}
            </div>
          </form>
          {errorsToDisplay && this.renderErrors()}
        </div>
      </div>
    );
  }
}

Signup.propTypes = {
  errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  errors: state.errors,
  auth: state.firebase.auth
});

export default connect(
  mapStateToProps,
  { createUser }
)(withRouter(Signup));
