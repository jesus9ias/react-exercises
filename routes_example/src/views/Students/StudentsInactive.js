import React, { Component } from 'react';
import StudentList from './StudentsList';

class StudentsInactive extends Component {
  render() {
    return (
      <div className="Students">
        <h1>Inactive Students</h1>
        <StudentList status={0} />
      </div>
    );
  }
}

export default StudentsInactive;
