import React, { Component } from 'react';

class Operation extends Component {
  state = {
    input: ''
  }

  totalVocals = (input) => {
    let i = input.length;
    let vocals = 0
    while (i--) {
      const character = input.charAt(i);
      if (character.match(/a|e|i|o|u|A|E|I|O|U/g)) {
        vocals++;
      }
    }
    return vocals;
  }

  componentDidMount() {
    global.eventHub.addListener('updateInput', (input) => {
      this.setState({
        input
      });
    });
  }

  render() {
    return (
      <div className="Result">
        <p>{this.totalVocals(this.state.input)} Total Vocals</p>
      </div>
    );
  }
}

export default Operation;
