import React, { Component } from 'react';
import Storage from 'key-storage';
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

  static getDerivedStateFromProps(props, state) {
    const isLoged = Storage.get('isLoged', false);
    return {
      isLoged
    };
  }

  doLogin(credentials) {
    const getLogin = users.find((user) => {
      return user.username === credentials.username && user.password === credentials.password;
    });
    if (getLogin) {
      Storage.set('isLoged', true);
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