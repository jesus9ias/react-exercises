import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {
  ListGroup,
  ListGroupItem,
  ButtonGroup,
  Button,
  Glyphicon
} from 'react-bootstrap';
import students from '../../data/students';
import OneStudent from './OneStudent';

class StudentList extends Component {
  state = {
    students,
    isInactive: window.location.href.indexOf('students/inactive') > -1
  }

  render() {
    return (
      <div>
        <ButtonGroup name="students_menu">
          <Button bsStyle={this.state.isInactive ? 'success' : 'primary'} value={1} href={'/students'}>Actives</Button>
          <Button bsStyle={this.state.isInactive ? 'primary' : 'success'} value={2} href={'/students/inactive'}>Inactives</Button>
        </ButtonGroup>
        <ListGroup>
          {
            this.state.students
              .filter(s => s.status === this.props.status)
              .map((student) => {
                return <ListGroupItem key={student.id}>
                  <Button href={`/students/${student.id}`}>
                    <Glyphicon glyph="edit" />
                  </Button>
                  <OneStudent student={student} />
                </ListGroupItem>
              })
          }
        </ListGroup>
      </div>
    );
  }
}

export default StudentList;
