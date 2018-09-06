import React, { Component } from 'react';
import countries from './data/countries';
import logo from './logo.svg';
import loading from './loading.png';
import './App.css';

class App extends Component {
  state = {
    isLoading: true,
    error: false,
    errorMessage: '',
    countries: []
  }

  getCountries = () => {
    try {
      this.setState({
        isLoading: false,
        countries
      });
      //  throw new Error('cant load countries');
    } catch (error) {
      this.setState({
        isLoading: false,
        error: true,
        errorMessage: error.message
      });
    }
  }

  renderCountries = () => {
    return (
      <div>
        {
          this.state.countries.map((country, i) => <p key={i}>{country}</p>)
        }
      </div>
    );
  }

  loadingState = () => {
    return (
      <div>
        {
          this.state.isLoading ?
            <img alt="loading animation" className="rotateAnim" width="64px" src={loading} />
          :
            null
        }
      </div>
    );
  }

  voidState = () => {
    return (
      <div>
        {
          !this.state.isLoading &&
            this.state.countries.length === 0 &&
            !this.state.error?
            <p>There's no countries avalable</p>
            :
            null
        }
      </div>
    );
  }

  errorState = () => {
    return (
      <div>
        {
          !this.state.isLoading && this.state.error ?
            <p>{this.state.errorMessage}</p>
            :
            null
        }
      </div>
    );
  }
  
  componentDidMount() {
    setTimeout(this.getCountries, 2000);
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Countries App</h1>
        </header>
        <div className="App-intro">
          {this.renderCountries()}
          {this.loadingState()}
          {this.voidState()}
          {this.errorState()}
        </div>
      </div>
    );
  }
}

export default App;
