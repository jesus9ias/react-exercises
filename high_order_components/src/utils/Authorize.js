import React, { Component } from 'react';
import Login from '../views/Login';
import Students from '../views/Students';
import users from '../data/users';

export default () => class Authorize extends Component {
  constructor(props) {
    super(props);
    this.doLogin = this.doLogin.bind(this);
  }

  state = {
    isLoged: false
  };

  doLogin(credentials) {
    const getLogin = users.find((user) => {
      return user.username === credentials.username && user.password === credentials.password;
    });
    if (getLogin) {
      this.setState({
        isLoged: true
      })
    }
  }

  render() {
    return !this.state.isLoged ?
      <Login doLogin={this.doLogin} />
      :
      <Students />;
  }
}