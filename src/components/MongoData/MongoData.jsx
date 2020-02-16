import React, { Component } from 'react';

import './MongoData.css';
class MongoData extends React.Component {
constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      products: []
    };
  }
  componentDidMount() {
    fetch("https://alert-amigo-api.herokuapp.com/products")
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            products: result.products
          });
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )
      console.log(this.state.products[0]);
  }
  render() {
    const { error, isLoaded, products } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <div id = "content">
          <div class="cards-maps">
           
          {products.map(item => (
            <ul key={item.id}>
            <li > <b>Product Name:</b> {item.productName}  </li>
              <li > <b>Product Price:</b> {item.productPrice}</li>
               <li ><b>Product Category:</b>{item.productCategory}</li>
              <li ><b>Product Brand:</b>{item.productBrand}</li>
              <li ><b>Country Of Origin:</b>{item.countryOfOrigin}</li>
              <li ><b>Risk Type:</b> {item.riskType}</li>
              <li > <b>Alert Submitted By:</b>{item.alertSubmittedBy}</li>
              <li > <b>City:</b>{item.yourCity}</li>
               <li ><b>Address:</b>{item.yourAddress}</li>
               <li ><b>Image Path:</b><a href="item.productImage">{item.productImage} </a></li>
              <li > <b>Description:</b>{item.description}</li>
           </ul>
          
          ))}
           <hr/>
          <br/>
        </div>
       
        </div>
      );
    }
  }
}
export default MongoData;
