import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import './Register.css';
import $ from 'jquery'

var userName, emailId, password, address, organisationName,confPassword,confEmail;


class Register extends Component {

  constructor(props) {
    super(props);
    this.validateUserInPut = this.validateUserInPut.bind(this);




  }







  validateUserInPut() {
    userName = $('#txtInputEmail').val();
    password = $('#txtInputPwd').val();
    emailId = $('#txtInputEmail').val();
    address = $('#txtInputAddress').val();
    organisationName = $('#txtInputOrgName').val();
    confPassword = $('#txtInputConfPwd').val();
    confEmail = $('#txtInputConfEmail').val();
    alert(" " + userName + " " + password + " " + emailId + " " + address);

    if (userName === '') {
      alert("User Name can not be empty");
    }

    if (password === '') {
      alert("Password can not be empty");

    }
    if (emailId === '') {
      alert("Email Id can not be empty");

    }
    if (address === '') {
      alert("Address Id can not be empty");
    }
    if (organisationName === '') {
      alert("Organisation name Id can not be empty");

    }

    if (confEmail === '') {
      alert("Email Id can not be empty");

    }

    if (confPassword === '') {
      alert("Password can not be empty");

    }



  }


  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to Register</h2>
        </div>

        <label id="lblemail"><b>Email</b></label>
        <input id="txtInputEmail" type="text" name="email" required></input>
        <label id="lblconfemail"><b>Confirm Email</b></label>
        <input id="txtInputConfEmail" type="text" name="confemail" required></input>

        <label id="lblorgname"><b>Organisation Name</b></label>
        <input id="txtInputOrgName" type="text" name="orgname" required></input>
        <label id="lbladdress"><b>Address</b></label>
        <input id="txtInputAddress" type="text" name="address" required></input>
        <label id="lbluname"><b>Username</b></label>
        <input id="txtInputUname" type="text" name="name" required></input>

        <label id="lblpwd"><b>Password</b></label>
        <input id="txtInputPwd" type="password" name="pwd" required />
        <label id="lblconfpwd"><b>Confirm Password</b></label>
        <input id="txtInputConfPwd" type="password" name="pwd" required />
        <button id="submitBtn" class="button" onClick={this.validateUserInPut}>Submit</button>





      </div>
    );
  }
}

export default Register;