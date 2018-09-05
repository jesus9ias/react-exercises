import React, { Component } from 'react';
import students from '../../data/students';
import courses from '../../data/courses';
import OneStudent from './OneStudent';

class EditStudent extends Component {
  getStudent = () => {
    const id = this.props.match.params.id;
    return students.find(student => student.id === Number(id))
  }

  state = {
    id: this.props.match.params.id,
    student: this.getStudent(),
    courses
  }

  static getDerivedStateFromProps(props, state) {
    const id = props.match.params.id;
    const student = students.find(student => student.id === Number(id));
    return {
      id,
      student,
      courses
    };
  }


  componentDidUpdate(state, props) {
    console.log(props);
  }

  renderStudent = () => {
    return (
      <div>
        <OneStudent student={this.state.student} />
        <div>
          {
            this.state.courses.filter((c) => {
              return c.students.indexOf(this.state.student.id) > -1
            })
            .map((course) => {
              return <p key={course.id}>{course.name}</p>
            })
          }
        </div>
      </div>
    );
  }

  render() {
    return (
      <div className="EditStudent">
        {
          this.state.student ?
            this.renderStudent()
          :
            null
        }
      </div>
    );
  }
}

export default EditStudent;
