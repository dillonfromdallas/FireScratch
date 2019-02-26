import React from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";

import { logoutUser } from "../../redux/actions/authActions";

const SignedInLinks = props => {
  return (
    <ul className="right">
      <li>
        <NavLink to="/idea/new">New Idea</NavLink>
      </li>
      <li>
        <a onClick={props.logout}>Log Out</a>
      </li>
      <li>
        <NavLink to="/" className="btn btn-floating pink lighten-1">
          PH
        </NavLink>
      </li>
    </ul>
  );
};

const mapDispatchToProps = dispatch => {
  return {
    logout: () => dispatch(logoutUser())
  };
};

export default connect(
  null,
  mapDispatchToProps
)(SignedInLinks);
