import React, { Component } from 'react';
import Navbar from './Navbar'


class MongoData extends React.Component {

constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      products: []
    };
  }

  // using effect hooks to fetch all data from alert-amigo rest api 
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
// render() function for data stored on mongodb data
  render() {
    const { error, isLoaded, products } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <div id = "content">
        // <Navbar account={this.state.account}/>
          {products.map(item => (
            <ul key={item.id}>
            <li > {item.productName}  </li>
              <li > {item.productPrice}</li>
               <li >{item.productCategory}</li>
              <li >{item.productBrand}</li>
              <li > {item.countryOfOrigin}</li>
              <li > {item.riskType}</li>
              <li > {item.alertSubmittedBy}</li>
              <li > {item.yourCity}</li>
               <li >{item.yourAddress}</li>
               <li >{item.productImage}</li>
              <li > {item.description}</li>
           </ul>
          ))}
        </div>
      );
    }
  }
}

export default MongoData;
