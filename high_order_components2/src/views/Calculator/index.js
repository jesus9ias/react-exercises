import React, { Component } from 'react';
import Operation from '../../components/Operation';
import ButtonsGroup from '../../components/ButtonsGroup';
import Form from './Form';
import Euro from './Euro';
import euroConversion from './euroConversion';
import Quetsal from './Quetsal';
import quetsalConversion from './quetsalConversion';
import Yen from './Yen';
import yenConversion from './yenConversion';

class Calculator extends Component {
  constructor(props) {
    super(props);
    this.getInput = this.getInput.bind(this);
  }

  state = {
    value1: 0,
    value2: 0
  }

  getInput(input) {
    this.setState({
      [input.name]: input.value
    });
  }

  render() {
    const EuroOperation = Operation(Euro, euroConversion);
    const QuetsalOperation = Operation(Quetsal, quetsalConversion);
    const YenOperation = Operation(Yen, yenConversion);
    return (
      <div className="Calculator">
        <Form getInput={this.getInput} />
        <ButtonsGroup>
          <EuroOperation data={this.state} />
          <QuetsalOperation data={this.state} />
          <YenOperation data={this.state} />
        </ButtonsGroup>
      </div>
    );
  }
}

export default Calculator;
