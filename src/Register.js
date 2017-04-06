import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import './Register.css';
import $ from 'jquery'
import ReactDOM from 'react-dom';
var Promises = require('promise');

var userName, emailId, password, address, organisationName, confPassword, confEmail;


class Register extends Component {

  constructor(props) {

    super(props);

    this.validateUserInPut = this.validateUserInPut.bind(this);

    this.pwdvalid = '';
    this.usernamevalid = '';
    this.addressvalid = '';
    this.organisationnamevalid = '';
    this.confpasswordvalid = '';
    this.confemailvalid = '';

  }


  validateUserInPut() {
    userName = $('#txtInputEmail').val();
    password = $('#txtInputPwd').val();
    emailId = $('#txtInputEmail').val();
    address = $('#txtInputAddress').val();
    organisationName = $('#txtInputOrgName').val();
    confPassword = $('#txtInputConfPwd').val();
    confEmail = $('#txtInputConfEmail').val();
    let emailvalid = false;
    let passwordvalid = false;
    alert("address" + address);

    var promise = new Promises(function (resolve, reject) {

      if (emailId) {
        fetch('http://localhost:3000/checkemailvalidation', {
          method: 'POST',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            email: emailId,
          })
        }).then(res => {

          if (res.status === 201) {

            emailvalid = true;


          }
          else if (res.status === 402) {

            emailvalid = false;

          }
          promise.then(function () {
            // function called when first promise returned
            return new Promises(function (resolve, reject) {
              fetch('http://192.168.0.86:3000/validatepwdrule', {
                  method: 'POST',
                  headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                  },
                  body: JSON.stringify({
                    password: password,
                  })
                }).then(res => res.json())
                  .then(res => {
                    alert(res.status);
                    if(status === 201){
                      passwordvalid = true;

                    }
                    else if (status === 402) {
                      passwordvalid = false;


                    }
                  });


              // second async stuff
              if (passwordvalid) {

                resolve(passwordvalid);
              } else {
                reject(passwordvalid);
              }
            });
          }, function (reason) {
            // error handler
          })

          promise.then(function () {
            // function called when first promise returned
            return new Promises(function (resolve, reject) {


              if (!emailvalid) {

                alert("please enter the correct email address !!");
                reject(emailvalid);


              }

              else if(!passwordvalid) {
                   alert("please enter a valid password !!");

              }

              else if (userName === '') {
                alert("User Name can not be empty");
              }

              else if (password === '') {
                alert("Password can not be empty");

              }
              else if (emailId === '') {
                alert("Email Id can not be empty");

              }
              else if (address === '') {
                alert("Address Id can not be empty");
              }
              else if (organisationName === '') {
                alert("Organisation name Id can not be empty");

              }

              else if (confEmail === '') {
                alert("Email Id can not be empty");

              }

              else if (confPassword === '') {
                alert("Password can not be empty");

              }


              else {

                fetch('http://192.168.0.86:3000/createadminusers', {
                  method: 'POST',
                  headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                  },
                  body: JSON.stringify({
                    username: userName,
                    email: emailId,
                    password: password,
                    address: address,
                    orgname: organisationName,
                  })
                }).then(res => res.json())
                  .then(res => console.log(res));
                resolve(emailvalid);

              }
            });

          }, function (err) {

            console.log(err);

          });
        });
        resolve(emailId);
      } else {
        alert('reject');
        reject(emailId);
      }
    });

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