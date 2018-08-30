
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      count: 0
    };
    this.sumOne = this.sumOne.bind(this);
    this.sumMultiple = this.sumMultiple.bind(this);
  }

  sumOne() {
    this.setState({
      count: this.state.count + 1
    }, () => {
      console.log('new', this.state.count);
      if (this.state.count === 10) {
        alert(this.state.count);
        this.sumOne();
      }
    });
    console.log('current', this.state.count);
  }

  sumMore() {
    this.setState((prevState) => ({
      count: prevState.count + 1
    }));
  }

  sumMultiple() {
    this.sumMore();
    this.sumMore();
    this.sumMore();
    this.sumMore();
    /*this.sumOne();
    this.sumOne();
    this.sumOne();
    this.sumOne();*/
  }

  render() {
    return (
      <div className="counting">
        <p>{this.state.count}</p>
        <button onClick={this.sumOne}>Sum One</button>
        <button onClick={this.sumMultiple}>Sum Multiple</button>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("app"));