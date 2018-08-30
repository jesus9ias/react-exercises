
class App extends React.Component {
  state = {
    num1: 0,
    num2: 0,
    result: 0
  }

  sumNumbers(e) {
    e.preventDefault();
    const result = this.state.num1 + this.state.num2;
    this.setState({
      result
    });
  }

  updateNum1(e) {
    this.setState({
      num1: e.target.value
    });
  }

  updateNum1(e) {
    this.setState({
      num2: e.target.value
    });
  }

  /*sumNumbers = (e) => {
    e.preventDefault();
    const result = Number(this.state.num1) + Number(this.state.num2);
    this.setState({
      result
    });
  }

  updateNum1 = (e) => {
    this.setState({
      num1: e.target.value
    });
  }

  updateNum2 = (e) => {
    this.setState({
      num2: e.target.value
    });
  }*/

  render() {
    return (
      <form onSubmit={this.sumNumbers}>
        <input type="text" onChange={this.updateNum1} />
        <input type="text" onChange={this.updateNum2} />
        <input type="submit" value="Sum" />
        <p>{this.state.result}</p>
      </form>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("app"));