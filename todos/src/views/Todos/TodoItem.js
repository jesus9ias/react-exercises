import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ViewTodo from './ViewTodo';
import EditTodo from './EditTodo';

class TodoItem extends Component {
  state = {
    isEditing: false
  }

  remove = () => {
    global.eventHub.emit('removeTodo', this.props.todo.id);
  }

  edit = () => {
    this.setState({
      isEditing: true
    });
  }

  componentDidMount() {
    global.eventHub.addListener('sendForm', (todo) => {
      if (todo.id === this.props.todo.id) {
        this.setState({
          isEditing: false
        });
      }
    });
  }

  render() {
    return (
      <div>
        {
          this.state.isEditing ?
            <EditTodo todo={this.props.todo} />
          :
            <ViewTodo todo={this.props.todo} />
        }
        {
          !this.state.isEditing ?
            <button onClick={this.edit}>Edit</button>
          :
            null
        }
        <button onClick={this.remove}>Remove</button>
      </div>
    );
  }
}

TodoItem.propTypes = {
  todo: PropTypes.object
};

export default TodoItem;
