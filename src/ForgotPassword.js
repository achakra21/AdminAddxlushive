import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import './Login.css';
import { Link } from 'react-router';
import SweetAlert from 'sweetalert-react';
import Util from './Util';




class ForgotPassword extends Component {

    constructor(props) {
        super(props);
        this.validateLogin = this.validateLogin.bind(this);
        this.state = {
            alert: null
        };

    }

    validateLogin() {


        var emailId = document.getElementById("txtInputUname").value;
        var confirmEmilId = document.getElementById("txtInputPwd").value;


        if (!this._util.validateEmail(emailId) || !this._util.validateEmail(confirmEmilId)) {

            alert("Please enter valid email addresss!!!!")


        }

        if (emailId === "" || confirmEmilId === "") {

            alert("Filed can't be left blank");

        }

        if (emailId !== confirmEmilId) {

            alert("email added not matching");

        }


    }



    render() {
        return (
            <div className="App">
                <div className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <h2>Welcome to Forgot Password</h2>

                </div>

                <label id="lbluname"><b>Enter Email Id</b></label>
                <input id="txtInputUname" type="text" name="name" required></input>
                <label id="lblpwd"><b>Confirm Email Id</b></label>
                <input id="txtInputPwd" type="text" name="confpassword" required />
                <button id="submitBtn" onClick={this.validateLogin}>Submit</button>
                <Util ref={(util) => { this._util = util; } } />

            </div>
        );
    }
}

export default ForgotPassword;
