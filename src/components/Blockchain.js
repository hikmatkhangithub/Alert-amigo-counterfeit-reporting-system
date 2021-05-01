import React, { Component } from "react";
import { BrowserRouter, Route, Switch, Redirect, Link } from "react-router-dom";
import Logo from "views/viewImages/tick.png";

class Blockchain extends Component {
  // render() function to show all the stored data on ethereum ropsten network
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
                <th scope="col">Block Number</th>
                <th scope="col">Owner</th>
                <th scope="col">Status</th>
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
                    <td>
                      {" "}
                      <a
                        href={`https://etherscan.io/block/${product.txHash}`}
                        target="_blank"
                      >
                        {product.txHash}
                      </a>{" "}
                    </td>
                    <td> {product.owner}</td>
                    <td scope="col">
                      <img width="25px" src={Logo}></img>
                    </td>
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
