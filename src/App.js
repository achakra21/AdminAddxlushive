import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';


import { Link, Router, RouterContext, browserHistory } from 'react-router';
//import {Router, Route, Link,browserHistory,RouterContext} from 'react-router'

class App extends Component {
   

   constructor(props) {
    super(props);
    // This binding is necessary to make `this` work in the callback
    this.gotoLogin = this.gotoLogin.bind(this);
    this.gotoRegister = this.gotoRegister.bind(this);
    //const { router } = this.context;
    
  }

  

  gotoLogin() {
  
   //hashHistory.push("/Login");
   // router.transitionTo("/Login");
  }

   gotoRegister() {
  //router.transitionTo("/Login");
     
  }
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        
        <button  onClick={this.gotoLogin} >Login</button>
        <button  onClick ={this.gotoRegister} >Register</button>
        <Link to={'/login'} >Login</Link>
          {this.props.children}

      </div>
    );
  }

}

export default App;

//   App.contextTypes = {
//    router: React.PropTypes.object
//  }