
const cities = [
  {id: 0, name: 'Monterrey', population: 2000000, },
  {id: 1, name: 'Guadalajara', population: 1000000, },
  {id: 2, name: 'Mexico City', population: 25000000, },
  {id: 3, name: 'Cancun', population: 800000, },
];

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      cities,
      currentId: cities.length
    };
    this.cityName = React.createRef();
    this.cityPopulation = React.createRef();
    this.addCity = this.addCity.bind(this);
    this.viewPopulation = this.viewPopulation.bind(this);
    this.totalPopulation = this.totalPopulation.bind(this);
  }

  viewPopulation(city) {
    alert(`Population is: ${city.population}`);
  }

  totalPopulation() {
    const total = this.state.cities.reduce((sum, city) => {
      return sum + city.population;
    }, 0);
    alert(total);
  }

  addCity(e) {
    e.preventDefault();
    const newId = this.state.currentId + 1;
    const newCity = {
      id: newId,
      name: this.cityName.current.value,
      population: this.cityPopulation.current.value
    };
    this.setState({
      currentId: newId,
      cities: [...this.state.cities, newCity]
    });
    this.cityName.current.value = '';
    this.cityPopulation.current.value = '';
  }

  deleteCity(id) {
    const cities = this.state.cities.filter(city => city.id !== id);
    this.setState({
      cities
    });
  }

  getCity(city) {
    return (
      <p key={city.id}>
        <span>{city.name}</span>
        <button onClick={() => this.viewPopulation(city)}>View population</button>
        <button onClick={() => this.deleteCity(city.id)}>Delete</button>
      </p>
    );
  }

  addCityForm() {
    return (<form onSubmit={this.addCity}>
      <input ref={this.cityName} type="text" placeholder="Name" />
      <input ref={this.cityPopulation} type="text" placeholder="Population" />
      <button type="submit">Submit</button>
    </form>);
  }

  render() {
    return (
      <div className="cities">
        {this.state.cities.map(city => this.getCity(city))}
        {this.addCityForm()}
        <button onClick={this.totalPopulation}>Total population</button>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("app"));