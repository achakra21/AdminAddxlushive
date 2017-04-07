import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import './DashBoard.css';
import { Link } from 'react-router';
import $ from 'jquery'
let LOGIN_URL = 'http://192.168.43.79:3000/validateadmincredentials?';



class DashBoard extends Component {

  constructor(props) {
    super(props);
    this.saveBanner = this.saveBanner.bind(this);
    this.loadFile = this.loadFile.bind(this);
    this.state = {
      imgFile: null,
      bannerImg: null,
      shopname: null,
      shopaddress: null,
      shopdescription: null,
      price: null,
      bannerBase64: null,
    };
  }

  saveBanner(event) {

    this.state.shopname = $('#txtInputshopname').val();
    this.state.shopaddress = $('#txtInputshopaddress').val();
    this.state.shopdescription = $('#txtInputshopdescription').val();
    this.state.price = $('#txtInputprice').val();
    this.state.bannerImg = document.getElementById('imgBanner');
    this.state.imgFile = $('#txtInputfile').val();

    fetch('http://localhost:3000/uploadimage', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        shopName: this.state.shopname,
        shopAddress: this.state.shopaddress,
        description: this.state.shopdescription,
        price: this.state.price,
        imgURL: this.state.bannerBase64
      })
    }).then(res => res.json())
      .then(res => {
        console.log(res)
        alert(res.status)
      });
  }

  loadFile(e) {

    let reader = new FileReader();
    let file = e.target.files[0];
    reader.onloadend = () => {
      $('#imgBanner').attr('src', reader.result);
      this.state.bannerBase64 = reader.result;
    }
    reader.readAsDataURL(file)
  }



  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to DashBoard</h2>

        </div>

        <label id="lblshopname"><b>Shop Name:</b></label>
        <input id="txtInputshopname" type="text" name="name" required></input>

        <label id="lblbanner"><b>Banner</b></label>
        <img id="imgBanner" src={require('./default.jpg')} alt="Mountain View" />

        <input id="txtInputfile" type="file" name="banner" accept="image/*" onChange={(e) => this.loadFile(e)} />
        <button id="submitBtneeww" onClick={this.saveBanner}>Submit</button>

        <label id="lblshopaddress"><b>Shop Addresss:</b></label>
        <textarea id="txtInputshopaddress" type="text" name="name" required></textarea>

        <label id="lblshopdescription"><b>Description:</b></label>
        <textarea id="txtInputshopdescription" type="text" name="name" required rows="4" cols="50"></textarea>

        <label id="lblprice"><b>Price:</b></label>
        <input id="txtInputprice" type="text" name="name" required></input>

      </div>
    );
  }
}

export default DashBoard;
