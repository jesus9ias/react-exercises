import React, { Component } from 'react';
import Navbar from './components/Navbar';
import Todos from './views/Todos';
import './styles/App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Todos />
      </div>
    );
  }
}

export default App;
