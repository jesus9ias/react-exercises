import React, { Component } from 'react';

class Operation extends Component {
  updateInput = (e) => {
    global.eventHub.emit('updateInput', e.target.value);
  }

  render() {
    return (
      <div className="Operation">
        <input type="text" onChange={this.updateInput} />
      </div>
    );
  }
}

export default Operation;
