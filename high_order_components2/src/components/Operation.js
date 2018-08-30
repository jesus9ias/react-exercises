import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default (WrappedComponent, conversion) => class Operation extends Component {
  state = {
    result: 0
  }

  static getDerivedStateFromProps(props) {
    const { value1, value2 } = props.data;
    const multiple = value1 * value2;
    const result = conversion(multiple).toFixed(2);
    return {
      result: result || 0
    }
  }

  render() {
    return (
      <WrappedComponent result={this.state.result} />
    );
  }

  static propTypes = {
    data: PropTypes.object
  }
}
