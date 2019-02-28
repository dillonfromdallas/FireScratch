import React from "react";
import { NavLink } from "react-router-dom";

const SignedOutLinks = () => {
  return (
    <ul>
      <li>
        <NavLink
          to="/signup"
          className="btn-large waves-effect waves-light white red-text"
        >
          Sign Up
        </NavLink>
      </li>
      <li>
        <NavLink to="/" className="app-label">
          Howdy
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/signin"
          className="btn-large waves-effect waves-light white red-text"
        >
          Log In
        </NavLink>
      </li>
    </ul>
  );
};

export default SignedOutLinks;
