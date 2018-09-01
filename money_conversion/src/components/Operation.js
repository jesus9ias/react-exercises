import React, { Component } from 'react';

export default (WrappedComponent, conversion) => class Operation extends Component {
  state = {
    result: 0
  }

  static getDerivedStateFromProps(props) {
    const multiply = props.data.num1 * props.data.num2;
    const result = conversion(multiply).toFixed(2);
    return {
      result
    };
  }
  
  render() {
    return (
      <WrappedComponent result={this.state.result} />
    );
  }
}
