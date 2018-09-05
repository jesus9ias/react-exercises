import React, { Component } from 'react';
import StudentList from './StudentsList';

class StudentsInactive extends Component {
  render() {
    return (
      <div className="Students">
        <StudentList status={0} />
      </div>
    );
  }
}

export default StudentsInactive;
