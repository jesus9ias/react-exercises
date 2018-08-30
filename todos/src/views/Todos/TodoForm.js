import React, { Component } from 'react';
import PropTypes from 'prop-types';

const defaultTodo = () => {
  return {
    id: null,
    title: '',
    description: '',
    priority: 1
  };
};

class TodoForm extends Component {
  state = {
    todo: {}
  }
  
  title = React.createRef();
  description = React.createRef();
  priority = React.createRef();

  sendForm = (e) => {
    e.preventDefault(); 
    const form = {
      id: this.state.todo.id || null,
      title: this.title.current.value,
      description: this.description.current.value,
      priority: this.priority.current.value
    };
    global.eventHub.emit('sendForm', form);
  }

  static getDerivedStateFromProps(props) {
    return {
      todo: props.todo || defaultTodo
    };
  }

  render() {
    return (
      <form onSubmit={this.sendForm}>
        <input ref={this.title} defaultValue={this.state.todo.title} type="text" placeholder="Title" />
        <input ref={this.description} defaultValue={this.state.todo.description} type="text" placeholder="Description" />
        <label>Priority</label>
        <select ref={this.priority} defaultValue={this.state.todo.priority}>
          <option value="1">Low</option>
          <option value="2">Medium</option>
          <option value="3">High</option>
        </select>
        <input type="submit" value={this.props.buttonText} />
      </form>
    );
  }
}

TodoForm.propTypes = {
  todo: PropTypes.object,
  buttonText: PropTypes.string
};

export default TodoForm;
