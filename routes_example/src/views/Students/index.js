import React, { Component } from 'react';
import StudentList from './StudentsList';

class Students extends Component {
  render() {
    return (
      <div className="Students">
        <h1>Active Students</h1>
        <StudentList status={1} />
      </div>
    );
  }
}

export default Students;
