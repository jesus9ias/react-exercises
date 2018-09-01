import React, { Component } from 'react';

class Operation extends Component {
  totalVocals = (input) => {
    let i = input.length;
    let vocals = 0
    while (i--) {
      const character = input.charAt(i);
      if (character.match(/a|e|i|o|u/g)) {
        vocals++;
      }
    }
    return vocals;
  }

  render() {
    return (
      <div className="Result">
        <p>{this.totalVocals(this.props.input)} Total Vocals</p>
      </div>
    );
  }
}

export default Operation;
