import React, { Component } from 'react';

class Student extends Component {
  render() {
    return <li>{this.props.data.names}</li>;
  }
}

export default Student;