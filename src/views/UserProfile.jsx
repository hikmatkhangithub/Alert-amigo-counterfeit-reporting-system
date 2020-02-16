/*!

=========================================================
* Light Bootstrap Dashboard React - v1.3.0
=========================================================

* Product Page: https://www.creative-tim.com/product/light-bootstrap-dashboard-react
* Copyright 2019 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/light-bootstrap-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React, { Component } from "react";
import { Link } from 'react-router-dom';
import { Form, FormControl, FormCheck, Col } from 'react-bootstrap';
import { FormGroup, ControlLabel, Row, Button, Checkbox, Radio, HelpBlock } from "react-bootstrap";
import axios from 'axios';
import { Grid, } from "react-bootstrap";

import Card from "components/Card/Card";
import { iconsArray } from "variables/Variables.jsx";
import './Typography.css';
function FieldGroup({ id, label, help, ...props }) {
return (
    <FormGroup controlId={id}>
    <ControlLabel>{label}</ControlLabel>
    <FormControl {...props} />
    {help && <HelpBlock>{help}</HelpBlock>}
    </FormGroup>
  );
}

class UserProfile extends Component {
  constructor() {
    super();

    this.state = {
      productName: '',
      productCategory: '',
      productBrand: '',
      riskType: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  changeHandler = e => {
    this.setState({[e.target.id]: e.target.value})
  }

  handleSubmit(e) {
      e.preventDefault();

      console.log('The form was submitted with the following data:');
      console.log(this.state);
      // axios
      //   .post('https://alert-amigo-api.herokuapp.com/products',this.state)
      //   .then(response => {
      //     console.log(response)
      //   })
      //   .catch(error => {
      //     console.log(error)
      //   })
  }
    // fetch('https://alert-amigo-api.herokuapp.com/products',{
    //     method: 'POST',
    //     headers: {
    //         Accept: 'application/json',
    //                 'Content-Type': 'application/json',
    //     },
    //     body: JSON.stringify(this.state)
    // }).then(response => {
    //         console.log(response)
    //     })
    //     .catch(error =>{
    //         console.log(error)
    //     });



  render() {
    return (
      
      <div class="container1">
      {/* <div className="typoForm"> */}
        
        {/* <div class="con"> */}
        <h2 class="search-header"> Search</h2>
        <hr class="new1"/>
        <div class="boxing">
  <form onSubmit={this.handleSubmit}>
  
    <FieldGroup
      id="productName"
      name="productName"
      type="text"
      label="Product Name"
      placeholder=""
      value={this.state.productName}
      onChange={this.changeHandler}
    />
   
   <div class="sm-3">
    <FormGroup controlId="productCategory" name="productCategory">
      <ControlLabel>Category</ControlLabel>
      <FormControl componentClass="select" name="productCategory" placeholder="select" onChange={this.changeHandler} value={this.state.selectValue}>
        <option value="select">select the category to which the product belongs to</option>
        <option value="electronics">Electronics</option>
        <option value="cosmetics">Cosmetics</option>
        <option value="apparels">Apparels</option>
        <option value="footwear">Footwear</option>
        <option value="accessories">Watches/Accessories</option>
        <option value="handbags">Handbags/Wallets</option>
        <option value="pharmaceuticals">Pharmaceuticals/Personal Care</option>
        <option value="Toys">Toys</option>
      </FormControl>
    </FormGroup>
    </div>

    <div class="sm-3">
    <FieldGroup
      id="productBrand"
      name="productBrand"
      type="text"
      label="Product Brand"
      placeholder=""
      value={this.state.productBrand}
      onChange={this.changeHandler}
    />
    </div>
    <FormGroup controlId="riskType" name="riskType">
      <ControlLabel>Risk Type</ControlLabel>
      <FormControl componentClass="select" placeholder="select" name="riskType" onChange={this.changeHandler} value={this.state.selectValue}>
        <option value="select">select the level of risk</option>
        <option value="high">high</option>
        <option value="medium">medium</option>
        <option value="low">low</option>
      </FormControl>
    </FormGroup>
 

    <button type="submit" class="popup-button">Search</button>
  </form>
  </div>
  </div>
  // </div>

    );

  }
}
export default UserProfile;
