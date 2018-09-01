import React, { Component } from 'react';
import Operation from '../components/Operation';
import Result from '../components/Result';

class Home extends Component {
  state = {
    input: ''
  }

  updateInput = (input) => {
    this.setState({
      input
    });
  }

  render() {
    return (
      <div className="App-intro">
        <Operation updateInput={this.updateInput} />
        <Result input={this.state.input} />
      </div>
    );
  }
}

export default Home;
