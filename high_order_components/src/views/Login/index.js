import React, { Component } from 'react';

class Login extends Component {
  constructor(props) {
    super(props);
    this.username = React.createRef();
    this.password = React.createRef();
    this.makeLogin = this.makeLogin.bind(this);
  }

  makeLogin(e) {
    e.preventDefault();
    const credentials = {
      username: this.username.current.value,
      password: this.password.current.value
    };
    this.props.doLogin(credentials);
  }

  render() {
    return (
      <div className="Login">
        <form onSubmit={this.makeLogin}>
          <input ref={this.username} type="text" placeholder="username" />
          <input ref={this.password} type="password" placeholder="password" />
          <input type="submit" value="Log in" />
        </form>
      </div>
    );
  }
}

export default Login;
