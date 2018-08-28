
class Message extends React.Component {

  componentDidMount() {
    throw new Error('Ups!, its broken');
  }

  componentWillUnmount() {
    console.log('9 - Unmounting');
  }

  render() {
    return (
      <p>Hello world</p>
    );
  }
}

class App extends React.Component {
  // Mounting

  constructor() {
    super();
    this.state = {
      name: ''
    };
    this.updateAge = this.updateAge.bind(this);
    console.log('1 - Constructor');
  }

  static getDerivedStateFromProps(props, state) {
    console.log('2 - Initial and updating state (if used must return the new state)');
    return {
      name: state.name || ''
    };
  }

  render() {
    console.log('3 - Rendering');
    return (
      <div className="App">
        <input onChange={this.updateAge} />
        <p>My name is {this.state.name}</p>
        {this.state.name === 'open' ? <Message /> : null}
      </div>
    );
  }

  componentDidMount() {
    console.log('4 - Component mounted');
  }

  // Updating

  updateAge(e) {
    console.log('5 - Updating');
    this.setState({
      name: e.target.value
    });
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log('6 - Should update', this.state.name, nextState.name);
    if (nextState.name === 'pepe') {
      return false;
    }
    return true
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log('7 - state snampshot', this.state.name, prevState.name);
    return prevState;
  }

  componentDidUpdate() {
    console.log('8 - Updated');
  }

  componentDidCatch(error, info) {
    console.info('10 - Some error', error, info);
  }
}

ReactDOM.render(<App />, document.getElementById("app"));