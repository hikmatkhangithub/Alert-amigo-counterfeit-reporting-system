import React, { Component } from "react";
/* import Main from "./Main";
import App from "./App";
import axios from "axios"; */

class Blockchain extends Component {
  
  render() {
    return (
      <div id="content">
        <h2>Submitted report</h2>

        <div id="productList">
          <table className="table">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Name</th>
                <th scope="col">Price</th>
                <th scope="col">Category</th>
                <th scope="col">Brand</th>
                <th scope="col">Country of origin</th>
                <th scope="col">Owner</th>
              </tr>
            </thead>
            <tbody id="productList">
              {this.props.products.map((product, key) => {
                return (
                  <tr key={key}>
                    <th scope="row">{product.id.toString()}</th>
                    <td> {product.pname}</td>
                    <td> {product.price.toString()}</td>
                    <td> {product.pCategory} </td>
                    <td> {product.pBrand}</td>
                    <td> {product.pCountryOfOrigin}</td>
                    <td> {product.owner}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default Blockchain;
