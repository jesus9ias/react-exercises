import React, { Component } from 'react';
import Header from './components/Header';
import './styles/App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header title="React Js Gallery"/>
        {this.props.children}
      </div>
    );
  }
}

export default App;
