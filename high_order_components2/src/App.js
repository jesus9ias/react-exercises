import React, { Component } from 'react';
import Navbar from './components/Navbar';
import Calculator from './views/Calculator';
import './styles/App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Calculator />
      </div>
    );
  }
}

export default App;
