import React, { Component } from 'react';
import Header from './components/Header';
import Gallery from './containers/Gallery';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header title="React Js Gallery"/>
        <Gallery />
      </div>
    );
  }
}

export default App;
