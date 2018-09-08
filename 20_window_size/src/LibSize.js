import React, { Component } from 'react';
import windowSize from 'react-window-size';

class LibSize extends Component {
  render() {
    return (
      <div>
        <p>Width: {this.props.windowWidth}</p>
        <p>Height: {this.props.windowHeight}</p>
      </div>
    );
  }
}

export default windowSize(LibSize);
