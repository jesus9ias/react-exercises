import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import students from '../../data/students';
import OneStudent from './OneStudent';

class StudentList extends Component {
  state = {
    students
  }

  render() {
    return (
      <div className="Students">
        <Link to={'/students'}>Actives</Link>
        <Link to={'/students/inactive'}>Inactives</Link>
        {
          this.state.students
            .filter(s => s.status === this.props.status)
            .map((student) => {
            return <div key={student.id}>
              <Link to={`/students/${student.id}`}>Edit</Link>
              <OneStudent student={student} />
            </div>
          })
        }
      </div>
    );
  }
}

export default StudentList;
