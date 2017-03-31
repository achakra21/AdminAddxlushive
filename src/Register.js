import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';


class Register extends Component {

   constructor(props) {
    super(props);
    
  }

  
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to Register</h2>
        </div>
       
      </div>
    );
  }
}

export default Register;