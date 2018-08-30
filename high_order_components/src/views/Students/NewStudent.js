import React, { Component } from 'react';

class NewStudent extends Component {
  constructor(props) {
    super(props);
    this.names = React.createRef();
    this.lastNames = React.createRef();
    this.addStudent = this.addStudent.bind(this);
  }

  addStudent(e) {
    e.preventDefault();
    const student = {
      names: this.names.current.value,
      lastNames: this.lastNames.current.value
    }
    this.props.saveStudent(student);
  }

  render() {
    return (
      <form onSubmit={this.addStudent}>
        <input ref={this.names} type="text" placeholder="Names" />
        <input ref={this.lastNames} type="text" placeholder="Lastnames" />
        <button type="submit">Save</button>
      </form>
    );
  }
}

export default NewStudent;
