import React, { Component } from 'react';
import PropTypes from 'prop-types';

const priorities = {
  1: 'Low',
  2: 'Medium',
  3: 'High'
}

class ViewTodo extends Component {
  render() {
    const { id, title, description, priority } = this.props.todo;
    return (
      <React.Fragment>
        <p>{id}</p>
        <p>{title}</p>
        <p>{description}</p>
        <p>{priorities[priority]}</p>
      </React.Fragment>
    );
  }
}

ViewTodo.propTypes = {
  todo: PropTypes.object
};

export default ViewTodo;
