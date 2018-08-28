import React, { Component } from 'react';
import Student from './Student';
import students from '../../data/students';

class Students extends Component {
  render() {
    return (
      <div className="Students">
        <ul>
          {students.map((student, i) => <Student key={i} data={student} />)}
        </ul>
      </div>
    );
  }
}

export default Students;
