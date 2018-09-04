import React, { Component } from 'react';

class ProfileData extends Component {
  render() {
    return (
      <div className="ProfileData">
        Profile Data
        {this.props.children}
      </div>
    );
  }
}

export default ProfileData;
