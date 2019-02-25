import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

class Signup extends Component {
  constructor() {
    super();
    this.state = {
      userName: "",
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
  onSubmit = e => {
    e.preventDefault();
    let errors = [];
    if (this.state.password !== this.state.confirm) {
      errors.push({ err: "Passwords do not match" });
    }

    /* 
    
    ~~~ BREAK FOR POINT OF DIMINISHING RETURNS ~~~

    You were setting up the auth flow.

    Right now, you were setting up the Signup flow.

    Using DevConnector as your basis, learn how to return and display errors from the Signup action.


    */
  };

  renderErrors() {
    // Update to return errors from an Object.
    // return this.state.errors.map(each => {
    //   return (
    //     <div className="card-panel red white-text" key={each.id}>
    //       {each.err}
    //     </div>
    //   );
    // });
    console.log(this.state.errors);
  }

  render() {
    return (
      <div className="container">
        <form onSubmit={this.onSubmit} className="white">
          <h5 className="grey-text text-darken-3">Sign Up</h5>

          <div className="input-field">
            <label htmlFor="userName">Username</label>
            <input type="text" id="userName" onChange={this.onChange} />
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
            <label htmlFor="confirm">Confirm Password</label>
            <input type="password" id="confirm" onChange={this.onChange} />
          </div>

          <div className="input-field">
            <button className="btn pink lighten-1 z-depth-0">Sign Up</button>{" "}
          </div>
        </form>
        {this.state.errors && this.renderErrors()}
      </div>
    );
  }
}

Signup.propTypes = {
  errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  errors: state.errors
});

export default connect(mapStateToProps)(withRouter(Signup));
