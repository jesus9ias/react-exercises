import React, { Component } from 'react';
import {
  Jumbotron,
  Button
} from 'react-bootstrap';

class Home extends Component {
  render() {
    return (
      <Jumbotron>
        <h1>Hello, Again</h1>
        <p>
          This is a simpe student repository App.
        </p>
        <Button bsStyle="primary" href="/students">Students</Button>
        <Button bsStyle="success" href="/profile">Profile</Button>
        <Button bsStyle="info" href="/about">About</Button>
      </Jumbotron>
    );
  }
}

export default Home;
