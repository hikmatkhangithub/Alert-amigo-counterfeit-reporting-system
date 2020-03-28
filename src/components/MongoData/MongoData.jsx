<<<<<<< HEAD
import React, { Component } from 'react';
import { fire, facebookProvider } from 'components/Config/Fire';
class MongoData extends React.Component {
constructor(props) {
    super(props);
    this.state = {
        user: {},
=======
import React, { Component } from "react";

import "./MongoData.css";
class MongoData extends Component {
  constructor(props) {
    super(props);
    this.state = {
>>>>>>> f2024770a70793b5f5ec64ded646958124ec9164
      error: null,
      isLoaded: false,
      products: []
    };
<<<<<<< HEAD
    this.authListener = this.authListener.bind(this);
  }
  componentDidMount() {
    this.authListener();
    fetch("https://alert-amigo-api.herokuapp.com/products")
      .then(res => res.json())
      .then(
        (result) => {
=======
  }

  componentDidMount() {
    fetch("https://alert-amigo-api.herokuapp.com/products")
      .then(res => res.json())
      .then(
        result => {
>>>>>>> f2024770a70793b5f5ec64ded646958124ec9164
          this.setState({
            isLoaded: true,
            products: result.products
          });
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
<<<<<<< HEAD
        (error) => {
=======
        error => {
>>>>>>> f2024770a70793b5f5ec64ded646958124ec9164
          this.setState({
            isLoaded: true,
            error
          });
        }
<<<<<<< HEAD
      )
      console.log(this.state.products[0]);
  }
  authListener() {
    fire.auth().onAuthStateChanged((user) => {
      console.log(user);
      if (user) {
        this.setState({ user });
        localStorage.setItem('user', user.uid);
      } else {
        this.setState({ user: null });
        localStorage.removeItem('user');
      }
    });
=======
      );
    console.log(this.state.products[0]);
>>>>>>> f2024770a70793b5f5ec64ded646958124ec9164
  }
  render() {
    const { error, isLoaded, products } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
<<<<<<< HEAD
        <div className="container1 content-margin">

          {products.map(item => (
            <div class="content">
                <div class="container">
                    <div class="row">
                        <div class="col-md-12">
                            <div class="card" key={item.id}>
                            <div class="card-title title-center" style={{color:"#333"}}>{item.productName}</div>
                              <hr class="new2"/>
                              <div class="card-content">

                                 <p style={{color:"#333"}}><b>Product Price:</b> {item.productPrice} </p>
                                 <p style={{color:"#333"}}><b>Product Category:</b>{item.productCategory}</p>
                                 <p style={{color:"#333"}}><b>Product Brand:</b>{item.productBrand}</p>
                                 <p style={{color:"#333"}}><b>Country Of Origin:</b>{item.countryOfOrigin}</p>
                                 <p style={{color:"#333"}}><b>Risk Type:</b> {item.riskType}</p>
                                 <p style={{color:"#333"}}><b>Alert Submitted By:</b>{item.alertSubmittedBy}</p>
                                 <p style={{color:"#333"}}><b>City:</b>{item.yourCity}</p>
                                 <p style={{color:"#333"}}><b>Address:</b>{item.yourAddress}</p>
                                 <p style={{color:"#333"}}><b>hello Description about the product:</b>{item.description}</p>
                              </div>
                            </div>
                          </div>
                        </div>
                    </div>
                </div>
                              ))}


                            </div>
=======
        <div id="content">
          <div className="cards-maps">
            {products.map(item => (
              <ul key={item.id}>
                <li>
                  {" "}
                  <b>Product Name:</b> {item.productName}{" "}
                </li>
                <li>
                  {" "}
                  <b>Product Price:</b> {item.productPrice}
                </li>
                <li>
                  <b>Product Category:</b>
                  {item.productCategory}
                </li>
                <li>
                  <b>Product Brand:</b>
                  {item.productBrand}
                </li>
                <li>
                  <b>Country Of Origin:</b>
                  {item.countryOfOrigin}
                </li>
                <li>
                  <b>Risk Type:</b> {item.riskType}
                </li>
                <li>
                  {" "}
                  <b>Alert Submitted By:</b>
                  {item.alertSubmittedBy}
                </li>
                <li>
                  {" "}
                  <b>City:</b>
                  {item.yourCity}
                </li>
                <li>
                  <b>Address:</b>
                  {item.yourAddress}
                </li>
                <li>
                  <b>Image Path:</b>
                  <a href="item.productImage">{item.productImage} </a>
                </li>
                <li>
                  {" "}
                  <b>Description:</b>
                  {item.description}
                </li>
              </ul>
            ))}
            <hr />
            <br />
          </div>
        </div>
>>>>>>> f2024770a70793b5f5ec64ded646958124ec9164
      );
    }
  }
}
export default MongoData;
