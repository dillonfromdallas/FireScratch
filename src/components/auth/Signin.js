import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Redirect, withRouter } from "react-router-dom";

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
    return <div className="card-panel white red-text">{err.message}</div>;
  }

  render() {
    const { auth } = this.props;
    if (auth.uid) return <Redirect to="/" />;
    const errorsToDisplay = !!Object.keys(this.state.errors).length;
    return (
      <div className="landing">
        <div className="container">
          <form onSubmit={this.onSubmit} className="">
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
                Log In
              </button>
            </div>
          </form>
          {errorsToDisplay && this.renderErrors()}
        </div>
      </div>
    );
  }
}

Signin.propTypes = {
  errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  errors: state.errors,
  auth: state.firebase.auth
});

export default connect(
  mapStateToProps,
  { loginUser }
)(withRouter(Signin));
