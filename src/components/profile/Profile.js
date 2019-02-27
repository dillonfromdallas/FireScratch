import React, { Component } from "react";
import { connect } from "react-redux";

class Profile extends Component {
  render() {
    const { profile } = this.props;
    return (
      <div>
        <h5>lol howdy ther {profile.username}</h5>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  profile: state.profile
});

export default connect(mapStateToProps)(Profile);
