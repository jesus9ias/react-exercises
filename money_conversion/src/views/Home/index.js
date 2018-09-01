import React, { Component } from 'react';
import Form from './Form';
import Operation from '../../components/Operation';
import Yen from './Yen';
import yenConversion from './yenConversion';
import Quetsal from './Quetsal';
import quetsalConversion from './quetsalConversion';
import Euro from './Euro';
import euroConversion from './euroConversion';

class Home extends Component {
  state = {
    num1: 0,
    num2: 0
  }

  saveInput = (input) => {
    this.setState({
      [input.name]: input.value
    });
  }

  render() {
    const YenResult = Operation(Yen, yenConversion);
    const QuetsalResult = Operation(Quetsal, quetsalConversion);
    const EuroResult = Operation(Euro, euroConversion);
    return (
      <div className="App-intro">
        <Form saveInput={this.saveInput} />
        <YenResult data={this.state} />
        <QuetsalResult data={this.state} />
        <EuroResult data={this.state} />
      </div>
    );
  }
}

export default Home;
