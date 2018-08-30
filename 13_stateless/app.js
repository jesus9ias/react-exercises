
class App extends React.Component {
  state = {
    name: ''
  };

  componentDidMount() {
    this.setState({
      name: 'Juan'
    });
  }
  

  render() {
    return (
      <p>{this.state.name}</p>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("app"));