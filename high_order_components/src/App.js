import React, { Component } from 'react';
import Navbar from './components/Navbar';
import Authorize from './utils/Authorize';
import './styles/App.css';

class App extends Component {
  render() {
    const View = Authorize();
    return (
      <div className="App">
        <Navbar />
        <View />
      </div>
    );
  }
}

export default App;
