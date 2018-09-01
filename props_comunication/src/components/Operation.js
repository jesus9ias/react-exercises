import React, { Component } from 'react';

class Operation extends Component {
  render() {
    return (
      <div className="Operation">
        <input type="text" onChange={(e) => this.props.updateInput(e.target.value)} />
      </div>
    );
  }
}

export default Operation;
