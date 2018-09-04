import React, { Component } from 'react';

class ProfilePassword extends Component {
  render() {
    return (
      <div className="ProfilePassword">
        password password
        {this.props.children}
      </div>
    );
  }
}

export default ProfilePassword;
