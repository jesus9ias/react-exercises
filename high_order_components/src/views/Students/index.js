import React, { Component } from 'react';
import Storage from 'key-storage';
import Student from './Student';
import NewStudent from './NewStudent';
import students from '../../data/students';

class Students extends Component {
  constructor(props) {
    super(props);
    this.saveStudent = this.saveStudent.bind(this);
  }

  state = {
    students: []
  };

  static getDerivedStateFromProps(props, state) {
    let myStudents = students;
    if (Storage.get('students', null)) {
      myStudents = JSON.parse(Storage.get('students'));
    } else {
      Storage.set('students', JSON.stringify(students));
    }
    return {
      students: myStudents
    };
  }

  saveStudent(student) {
    const newStudents = JSON.stringify([...this.state.students, student]);
    Storage.set('students', newStudents);
    this.setState((prevState) => ({
      students: [...prevState.students, student]
    }));
  }

  render() {
    return (
      <div className="Students">
        <ul>
          {this.state.students.map((student, i) => <Student key={i} data={student} />)}
        </ul>
        <NewStudent saveStudent={this.saveStudent} />
      </div>
    );
  }
}

export default Students;
