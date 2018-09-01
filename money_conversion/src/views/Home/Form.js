import React, { Component } from 'react';

class Form extends Component {

  updateInput = (e) => {
    this.props.saveInput(e.target);
  }

  render() {
    return (
      <form>
        <input name="num1" onChange={this.updateInput} placeholder="Ammount 1" />
        <input name="num2" onChange={this.updateInput} placeholder="Ammount 2" />
      </form>
    );
  }
}

export default Form;
