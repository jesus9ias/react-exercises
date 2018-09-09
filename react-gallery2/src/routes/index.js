import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import App from '../App';
import Home from '../views/Home';
import Login from '../views/Login';
import Profile from '../views/Profile';
import Gallery from '../views/Gallery';
import Favorites from '../views/Favorites';

class RouterHandler extends Component {
  render() {
    return (
      <Router>
        <App>
          <Route exact path="/" component={Home}/>
          <Route exact path="/login" component={Login}/>
          <Route exact path="/profile" component={Profile} />
          <Route exact path="/gallery" component={Gallery} />
          <Route exact path="/favorites" component={Favorites} />
        </App>
      </Router>
    );
  }
}
export default () => <RouterHandler />;