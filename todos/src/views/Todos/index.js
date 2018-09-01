import React, { Component } from 'react';
import uuid from 'uuid/v4';
import todos from '../../data/todos';
import TodoItem from './TodoItem';
import NewTodo from './NewTodo';

class Todos extends Component {
  state = {
    todos
  }

  componentDidMount() {
    global.eventHub.addListener('removeTodo', (id) => {
      this.setState({
        todos: this.state.todos.filter(todo => todo.id !== id)
      });
    });
    global.eventHub.addListener('sendForm', (todo) => {
      if (!todo.id) {
        todo.id = uuid();
        this.setState({
          todos: [...this.state.todos, todo]
        });
      } else {
        const newTodos = this.state.todos.map((t) => {
          if (t.id === todo.id) {
            return todo;
          }
          return t;
        });
        this.setState({
          todos: newTodos
        });
      }
    });
  }

  render() {
    return (
      <div className="Todos">
        Todos
        {this.state.todos.map((todo, i) => <TodoItem key={i} todo={todo} />)}
        <NewTodo />
      </div>
    );
  }
}

export default Todos;
