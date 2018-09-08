import React, { Component } from 'react';

class ManualSize extends Component {
  state = {
    width: 0,
    height: 0
  }

  updateDimensions() {
    if (window.innerWidth < 500) {
      this.setState({ width: 450, height: 100 });
    } else {
      let width = window.innerWidth;
      let height = window.innerHeight;
      this.setState({ width, height });
    }
  }

  componentDidMount() {
    this.updateDimensions();
    window.addEventListener('resize', this.updateDimensions.bind(this));
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateDimensions.bind(this));
  }

  render() {
    return (
      <div>
        <p>Width: {this.state.width}</p>
        <p>Height: {this.state.height}</p>
      </div>
    );
  }
}

export default ManualSize;
