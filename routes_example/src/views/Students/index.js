import React, { Component } from 'react';
import StudentList from './StudentsList';

class Students extends Component {
  render() {
    return (
      <div className="Students">
        <StudentList status={1} />
      </div>
    );
  }
}

export default Students;
