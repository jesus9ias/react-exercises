
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      age: 0,
      techs: [],
      useTitle: false
    };
    this.updateAge = this.updateAge.bind(this);
    this.updateName = this.updateName.bind(this);
    this.updateTechs = this.updateTechs.bind(this);
    this.updateUsingTitle = this.updateUsingTitle.bind(this);
  }

  updateAge(e) {
    this.setState({
      age: e.target.value
    });
  }

  updateName(e) {
    this.setState({
      name: e.target.value
    });
  }

  updateTechs(e) {
    const options = e.target.options;
    const techs = [];
    for (let i = 0, l = options.length; i < l; i++) {
      if (options[i].selected) {
        techs.push({ value: options[i].value, text: options[i].text });
      }
    }
    this.setState({
      techs
    });
  }

  updateUsingTitle(e) {
    this.setState({
      useTitle: e.target.checked
    });
  }

  render() {
    return (
      <div className="App">
        <h2>Presentation Card Creator</h2>
        <input onChange={this.updateName} placeholder="Name" />
        <input onChange={this.updateAge} placeholder="Age" />
        <p>Use title</p>
        <input type="checkbox" defaultChecked={this.state.useTitle} onChange={this.updateUsingTitle} />
        <p>Technologies</p>
        <select multiple onChange={this.updateTechs}>
          <option value="javascript">Javascript</option>
          <option value="csharp">C#</option>
          <option value="reactjs">ReactJs</option>
          <option value="vuejs">VueJs</option>
          <option value="php">PHP</option>
        </select>
        <Card {...this.state} />
      </div>
    );
  }
}

class Card extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { name, age, techs, useTitle } = this.props;
    return (
      <div>
        <h3><span>{useTitle ? 'Ing.' : ''}</span> {name}</h3>
        <p>{age}</p>
        {techs.map(tech => <p key={tech.value}>{tech.text}</p>)}
      </div>
    );
  }
}

Card.propTypes = {
  name: PropTypes.string,
  age: PropTypes.number,
  techs: PropTypes.array,
  useTitle: PropTypes.bool
};

ReactDOM.render(<App />, document.getElementById("app"));