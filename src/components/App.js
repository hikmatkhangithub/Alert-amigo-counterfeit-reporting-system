import React, { Component } from "react";
import Web3 from "web3";
import Marketplace from "../abis/Marketplace.json";
import Main from "./Main";
import HDWalletProvider from "@truffle/hdwallet-provider";

class App extends Component {
  async componentWillMount() {
    await this.loadWeb3();
    await this.loadBlockchainData();
  }

// function to connect alert-amigo app to ethereum blockchain network
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
// Async function to load blockchain data stored on ethereum network
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
// Count products
      const productCount = await marketplace.methods.productCount().call();
      this.setState({ productCount });
// Load products
      for (var i = 1; i <= productCount; i++) {
        const product = await marketplace.methods.products(i).call();

        this.setState({
          products: [...this.state.products, product]
        });
//checking products in console
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
      productCount: 0,
      products: [],
      productss: [],
      loading: true
    };
  }

 // render() function to show all products stored on ethereum ropsten network
  render() {
    return (
      <div>
        <div className="container-fluid mt-5">
          <div className="row">
            <main role="main" className="col-lg-12 d-flex">
              {this.state.loading ? (
                <div id="loader" className="text-center">
                  <p className="text-center">Loading...</p>
                </div>
              ) : (
                <Main
                  products={this.state.products}
                  createProduct={this.createProduct}
                />
              )}
            </main>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
