
class App extends React.Component {
  userName = 'beto234';

  componentDidMount() {
    this.userName = 'beto543';
  }

  render() {
    return (
      <p>{this.userName}</p>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("app"));