import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';


import { Link, Router, RouterContext, browserHistory, hashHistory } from 'react-router';

class App extends Component {


  constructor(props) {
    super(props);
    // This binding is necessary to make `this` work in the callback
    this.gotoLogin = this.gotoLogin.bind(this);
    this.gotoRegister = this.gotoRegister.bind(this);
  }



  gotoLogin() {

    browserHistory.push("/login");
  }

  gotoRegister() {
    browserHistory.push("/register");

  }
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>

        <button class="Button1 Button5" onClick={this.gotoLogin} >Login</button>
        <button class="Button1 Button5" onClick={this.gotoRegister} >Register</button>
        
       
      </div>
    );
  }

}

export default App;

