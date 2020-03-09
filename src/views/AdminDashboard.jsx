import React, { Component } from "react";
import { Link } from "react-router-dom";
import "Abc.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Badge } from "reactstrap";
import Web3 from "web3";
import Marketplace from "../abis/Marketplace.json";
import { isConditionalExpression } from "typescript";
import Logo from "./tick.png";

class AdminDashboard extends Component {
  async componentWillMount() {
    await this.loadWeb3();
    await this.loadBlockchainData();
  }

  async loadWeb3() {
    if (window.ethereum) {
      window.web3 = new Web3(window.ethereum);
      try {
        await window.ethereum.enable();
      } catch (error) {}
    } else if (window.web3) {
      window.web3 = new Web3(window.web3.currentProvider);
    } else {
      window.alert(
        "Non-Ethereum browser detected. You should consider trying MetaMask!"
      );
    }
  }

  async loadBlockchainData() {
    const web3 = new Web3(window.web3);
    // Load account
    const accounts = await web3.eth.getAccounts();
    this.setState({ account: accounts[0] });
    const networkId = await web3.eth.net.getId();
    const networkData = Marketplace.networks[networkId];
    if (networkData) {
      const marketplace = new web3.eth.Contract(
        Marketplace.abi,
        networkData.address
      );
      this.setState({ marketplace });
      // const productCount = await marketplace.methods.productCount().call();
      //console.log(productCount.toString())
      //   this.setState({ productCount });
      // Load products
      /*  for (var i = 1; i <= productCount; i++) {
        const product = await marketplace.methods.products(i).call();
        // const product1 = await marketplace.methods.productss(i).call()

        this.setState({
          products: [...this.state.products, product]
          //  productss: [...this.state.productss, product1]
        });
        console.log(product);
        // console.log(product1)
      } */
      //---------------------------------added code-----------------------------
      //---------------------------------added code end-------------------------
      this.setState({ loading: false });
    } else {
      window.alert("Marketplace contract not deployed to detected network.");
    }
  }

  /* ----------------------Above code is newly added---------------------------------- */
  constructor(props) {
    super(props);
    this.state = {
      account: "",
      productCount: 0,
      error: null,
      isLoaded: false,
      products: [],
      loading: true,
      showMessage: false,
      valueSet: ""
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.createProduct = this.createProduct.bind(this);
  }

  componentDidMount() {
    this.refreshList = () => {
      fetch("https://alert-amigo-api.herokuapp.com/products")
        .then(res => {
          return res.json();
        })
        .then(
          result => {
            this.setState({
              isLoaded: true,
              products: result.products
            });
          },
          // Note: it's important to handle errors here
          // instead of a catch() block so that we don't swallow
          // exceptions from actual bugs in components.
          error => {
            this.setState({
              isLoaded: true,
              error
            });
          }
        );
    };
  }
  componentDidUpdate() {
    this.refreshList();
  }

  createProduct = (pname, price, pCategory, pBrand, pCountryOfOrigin) => {
    this.setState({ loading: true });
    this.state.marketplace.methods
      .createProduct(pname, price, pCategory, pBrand, pCountryOfOrigin)
      .send({ from: this.state.account })
      .once("receipt", receipt => {
        this.setState({ loading: false });
      });
  };

  handleSubmit = (event, data) => {
    const pname = data.productName;
    const price = data.productPrice;
    const pCategory = data.productCategory;
    const pBrand = data.productBrand;
    const pCountryOfOrigin = data.countryOfOrigin;

    /*  console.log("e", event.target.value); */

    this.createProduct(pname, price, pCategory, pBrand, pCountryOfOrigin);

    this.setState({ isClicked: !this.state.showMessage });
    this.setState({ valueSet: event.target.value });
    console.log("Is clicked", this.state.isClicked);
    console.log("Is clicked for value", this.state.valueSet);
  };

  handleDelete = id => {
    if (window.confirm("Are you sure")) {
      fetch("https://alert-amigo-api.herokuapp.com/products/" + id, {
        method: "DELETE",
        header: {
          Accept: "application/json",
          "Content-Type": "application/json"
        }
      });
    }
  };
  render() {
    const { error, isLoaded, products } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <div id="content">
          <div className="container">
            <h2 className="abc">All Report</h2>
            <hr className="new1"></hr>
            <div className="cards cards-maps">
              {products.map(item => (
                <ul className="ul-design" key={item.id}>
                  <li>
                    {" "}
                    <b>Product Id:</b> {item._id}{" "}
                  </li>
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
                  <li>
                    {" "}
                    <div className="btn-btn-design">
                      <Button
                        color="primary"
                        type="button"
                        className=" mybtn-blockchain"
                        value={item._id}
                        onClick={event => this.handleSubmit(event, item)}
                      >
                        Submit to blockchain
                      </Button>{" "}
                      <Button
                        color="danger"
                        className=" mybtn-delete"
                        value={item._id}
                        onClick={() => this.handleDelete(item._id)}
                      >
                        Delete Report
                      </Button>
                    </div>
                  </li>

                  <li>
                    {" "}
                    <div className="success-msg">
                      {this.state.valueSet === item._id ? (
                        <div>
                          Sucess! <img width="35px" height="auto" src={Logo} />
                        </div>
                      ) : (
                        <div></div>
                      )}
                    </div>
                  </li>
                </ul>
              ))}

              <hr />
              <br />
            </div>
          </div>
        </div>
      );
    }
  }
}

export default AdminDashboard;
