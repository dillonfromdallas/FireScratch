import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";

class Landing extends Component {
  render() {
    const { auth } = this.props;
    if (auth.uid) return <Redirect to="/home" />;
    return (
      <div className="landing">
        <div className="container">
          <div className="header-row row">
            <div className="col s12 header ">
              <h1 className="white-text header-text">Howdy</h1>
            </div>
          </div>
          <div className="col s12 tagline">
            <div className="white-text tagline-text">
              The note-taking app to help keep your head together.
            </div>
            <div className="button-row">
              <Link
                className="btn-large waves-effect waves-light white"
                to="/signup"
              >
                <i className="red-text landing-button">Signup</i>
              </Link>
              <Link
                className=" border-button btn-large waves-effect waves-light"
                to="/home"
              >
                <i className="white-text landing-button">Browse</i>
              </Link>
              <Link
                className="border-button btn-large waves-effect waves-light white"
                to="/signin"
              >
                <i className="red-text landing-button">Login</i>
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  auth: state.firebase.auth
});

export default connect(mapStateToProps)(Landing);
