
const cities = [
  { name: 'Monterrey', population: 2000000, },
  { name: 'Guadalajara', population: 1000000, },
  { name: 'Mexico City', population: 25000000, },
  { name: 'Cancun', population: 800000, },
];

class App extends React.Component {
  constructor() {
    super();
    this.totalPopulation = this.totalPopulation.bind(this);
    this.viewPopulation = this.viewPopulation.bind(this);
  }

  viewPopulation(city) {
    alert(`Population is: ${city.population}`);
  }

  totalPopulation() {
    const total = cities.reduce((sum, city) => {
      return sum + city.population;
    }, 0);
    alert(total);
  }

  getCity(city, index) {
    return (
      <p key={index}>
        <span>{city.name}</span>
        <button onClick={() => this.viewPopulation(city)}>View population</button>
      </p>
    );
  }

  render() {
    return (
      <div className="cities">
        {cities.map((city, i) => this.getCity(city, i))}
        <button onClick={this.totalPopulation}>Total population</button>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("app"));