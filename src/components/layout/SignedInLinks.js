import React from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import PropTypes from "prop-types";

import { logoutUser } from "../../redux/actions/authActions";
import { getProfile } from "../../redux/actions/profileActions";

class SignedInLinks extends React.Component {
  render() {
    const {
      auth: { uid },
      logout,
      Profile,
      history
    } = this.props;
    return (
      <ul>
        <li>
          <NavLink
            to="/idea/new"
            className="btn-large waves-effect waves-light white red-text"
          >
            New Idea
          </NavLink>
        </li>
        <li>
          {Profile ? (
            <NavLink to="/home" className="app-label">
              Howdy
            </NavLink>
          ) : (
            <NavLink
              to="/me"
              className="btn-large waves-effect waves-light white red-text"
            >
              My Ideas
            </NavLink>
          )}
        </li>
        <li>
          <a
            onClick={logout}
            className="btn-large waves-effect waves-light white red-text"
          >
            Log Out
          </a>
        </li>
      </ul>
    );
  }
}

SignedInLinks.propTypes = {
  Profile: PropTypes.bool.isRequired
};

SignedInLinks.defaultProps = {
  Profile: false
};

const mapDispatchToProps = dispatch => {
  return {
    logout: () => dispatch(logoutUser()),
    profile: (uid, history) => dispatch(getProfile(uid, history))
  };
};

const mapStateToProps = state => ({
  auth: state.firebase.auth
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(SignedInLinks));
