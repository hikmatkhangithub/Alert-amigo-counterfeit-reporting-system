import React, { Component } from "react";
import { Grid, Row, Col } from "react-bootstrap";
import "./Typography.css";
/* import Main from "components/Main.js";
import App from "components/App.js"; */

import Card from "components/Card/Card";
import { iconsArray } from "variables/Variables.jsx";

import { Redirect } from "react-router-dom";

import Blockchain from "components/Blockchain";

import Web3 from "web3";
import Marketplace from "../abis/Marketplace.json";

class Icons extends Component {
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
    const web3 = window.web3;
    // Load account
    const accounts = await web3.eth.getAccounts();
    this.setState({ account: accounts[0] });

    /* -------------TxHash key------------------ */
    /*     const txHash = await web3.eth.getTransactions();
    this.setState({ Hash: txHash[0] });
    console.log(this.state.Hash); */
    /* --------------------------------------------- */
    const networkId = await web3.eth.net.getId();
    const networkData = Marketplace.networks[networkId];
    if (networkData) {
      const marketplace = new web3.eth.Contract(
        Marketplace.abi,
        networkData.address
      );
      this.setState({ marketplace });
      const productCount = await marketplace.methods.productCount().call();
      /* const txHash = await marketplace.eth.getTransaction();

      console.log(txHash); */
      this.setState({ productCount });

      for (var i = 1; i <= productCount; i++) {
        const product = await marketplace.methods.products(i).call();
        this.setState({
          products: [...this.state.products, product]
        });
        console.log(product);
      }

      this.setState({ loading: false });
    } else {
      window.alert("Marketplace contract not deployed to detected network.");
    }
  }

  constructor(props) {
    super(props);
    this.state = {
      account: "",
      Hash: "",
      productCount: 0,
      products: [],
      loading: true
    };
  }
  setRedirect(event) {
    console.log("this is an alert");
    const url = "https://etherscan.io/";
    window.open(url, "_blank");
  }

  render() {
    return (
      <div className="content">
        <Grid fluid>
          <Row>
            <Col md={12}>
              <div class="card88">
                <Card
                  title="Status of your Alert"
                  ctAllIcons
                  category={
                    <span>Check the status of your Alert on EtherScan</span>
                  }
                  content={
                    <Row>
                      <Col
                        lg={2}
                        md={3}
                        sm={4}
                        xs={6}
                        className="font-icon-list"
                      >
                        <button
                          type="submit"
                          className="popup-status-button"
                          onClick={this.setRedirect}
                        >
                          Alert Status
                        </button>
                      </Col>
                    </Row>
                  }
                />
              </div>
            </Col>
          </Row>
        </Grid>
        <Blockchain products={this.state.products} />
      </div>
    );
  }
}

export default Icons;
