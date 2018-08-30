import React, { Component } from 'react';

class Student extends Component {
  render() {
    return <li>{this.props.data.names} {this.props.data.lastNames}</li>;
  }
}

export default Student;