
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      name: 'Pepe',
      age: 20
    }
    this.viewAge = this.viewAge.bind(this);
  }

  componentDidMount() {
    console.log('Component mounted');
  }

  viewAge() {
    alert(`I am ${this.state.age} years old`);
  }

  render() {
    return (
      <div className="App">
        <p>My name is {this.state.name}</p>
        <button onClick={this.viewAge}>View Age</button>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("app"));