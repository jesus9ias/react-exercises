var data = "Component with js Class"

class App extends React.Component {
  render() {
    return (
      <div className="App">
        {data}
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("app"));