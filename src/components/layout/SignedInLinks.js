import React from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import { logoutUser } from "../../redux/actions/authActions";
import { getProfile } from "../../redux/actions/profileActions";

class SignedInLinks extends React.Component {
  render() {
    const {
      auth: { uid },
      logout,
      profile,
      history
    } = this.props;
    return (
      <ul className="right">
        <li>
          <NavLink to="/idea/new">New Idea</NavLink>
        </li>
        <li>
          <a onClick={logout}>Log Out</a>
        </li>
        <li>
          <a
            onClick={() => profile(uid, history)}
            className="btn btn-floating color-bad"
          >
            ツ
          </a>
        </li>
      </ul>
    );
  }
}

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
