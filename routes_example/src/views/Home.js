import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Home extends Component {
  render() {
    return (
      <div className="Home">
        <h2>Home</h2>
        <Link to="/students">Students</Link>
        <Link to="/profile">Profile</Link>
        <Link to="/about">About</Link>
      </div>
    );
  }
}

export default Home;
