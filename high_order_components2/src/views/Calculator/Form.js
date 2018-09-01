import React, { Component } from 'react';

class Form extends Component {
  constructor(props) {
    super(props);
    this.updateInput = this.updateInput.bind(this);
  }

  updateInput(e) {
    e.preventDefault();
    this.props.getInput(e.target);
  }

  render() {
    return (
      <form className="Form">
        <input name="value1" onChange={this.updateInput} type="text" placeholder="Ammount one" />
        <input name="value2" onChange={this.updateInput} type="text" placeholder="Ammount two" />
      </form>
    );
  }
}

export default Form;
