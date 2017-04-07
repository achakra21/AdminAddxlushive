import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import './Login.css';
import { Link, Router, RouterContext, browserHistory, hashHistory } from 'react-router';
let LOGIN_URL = 'http://192.168.0.86:3000/validateadmincredentials?';




class Login extends Component {

  constructor(props) {
    super(props);
    this.validateLogin = this.validateLogin.bind(this);

  }

  validateLogin() {

    let userName = document.getElementById("txtInputUname").value;
    let password = document.getElementById("txtInputPwd").value;

    let parameters = "email=" + userName + "&" + "password=" + password;

    fetch(LOGIN_URL + parameters)
      .then(function (response) {
     if(response.status === 401){

       alert("user does not exists!!!")
     }

     else {

       alert("Success");
        browserHistory.push("/dashboard");
     }

      }).then(function (json) {
        console.log('parsed json', json)
      }).catch(function (ex) {
        console.log('parsing failed', ex)
      })

  }




  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to Login</h2>

        </div>

        <label id="lbluname"><b>Username</b></label>
        <input id="txtInputUname" type="text" name="name" required></input>
        <label id="lblpwd"><b>Password</b></label>
        <input id="txtInputPwd" type="password" name="pwd" required />
        <button id="submitBtn" onClick={this.validateLogin}>Submit</button>
        <label id="lblrm">Remember me</label>
        <input id="cbRemberMe" type="checkbox" name="vehicle" value="Bike" />
        <Link id="linkfp" to={"/forgotpassword"}>forgot password</Link>




      </div>
    );
  }
}

export default Login;
