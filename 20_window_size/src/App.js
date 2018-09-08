import React, { Component } from 'react';
import ManualSize from './ManualSize';
import LibSize from './LibSize';
import Mobile from './Mobile';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <ManualSize />
        <LibSize />
        <Mobile />
      </div>
    );
  }
}

export default App;
