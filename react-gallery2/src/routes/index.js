import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import App from '../App';
import Home from '../views/Home';
import Login from '../views/Login';

class RouterHandler extends Component {
  render() {
    return (
      <Router>
        <App>
          <Route exact path="/" component={Home}/>
          <Route exact path="/login" component={Login}/>
        </App>
      </Router>
    );
  }
}
export default () => <RouterHandler />;