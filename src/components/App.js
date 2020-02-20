import React, { Component } from 'react';
import Web3 from 'web3'
import Marketplace from '../abis/Marketplace.json'
import Navbar from './Navbar'
import Main from './Main'


class App extends Component {

  async componentWillMount() {
    await this.loadWeb3()
    await this.loadBlockchainData()
  }

  async loadWeb3() {
    if (window.ethereum) {
      window.web3 = new Web3(window.ethereum)
      await window.ethereum.enable()
    }
    else if (window.web3) {
      window.web3 = new Web3(window.web3.currentProvider)

    }
    else {
      window.alert('Non-Ethereum browser detected. You should consider trying MetaMask!')
    }
  }

  async loadBlockchainData() {
    const web3 = window.web3
    // Load account
    const accounts = await web3.eth.getAccounts()
    this.setState({ account: accounts[0] })
    const networkId = await web3.eth.net.getId()
    const networkData = Marketplace.networks[networkId]
    if(networkData) {
      const marketplace =new web3.eth.Contract(Marketplace.abi, networkData.address)
      this.setState({ marketplace })
      const productCount = await marketplace.methods.productCount().call()
      //console.log(productCount.toString())
      this.setState({ productCount })
      // Load products
      for (var i = 1; i <= productCount; i++) {
        const product = await marketplace.methods.products(i).call()
       // const product1 = await marketplace.methods.productss(i).call()
        
        this.setState({
          products: [...this.state.products, product],
        //  productss: [...this.state.productss, product1]
        })
      console.log(product)
     // console.log(product1)
      }
      //---------------------------------added code-----------------------------
      //---------------------------------added code end-------------------------
      this.setState({ loading: false})
    } else {
      console.log(window.web3.currentProvider)

      window.alert('Marketplace contract not deployed to detected network.')
    }
  }

  constructor(props) {
    super(props)
    this.state = {
      account: '',
      productCount: 0,
      products: [],
      productss:[],
      loading: true
    }




    this.createProduct = this.createProduct.bind(this)
  //  this.createProduct1 = this.createProduct1.bind(this)
   /* this.purchaseProduct = this.purchaseProduct.bind(this)*/
  }


  createProduct(pname, price, pCategory, pBrand, pCountryOfOrigin) {
    this.setState({ loading: true })
    this.state.marketplace.methods.createProduct(pname, price, pCategory, pBrand, pCountryOfOrigin).send({ from: this.state.account })
    .once('receipt', (receipt) => {
      this.setState({ loading: false })

      
    })

  }


  render() {
    return (
      <div>
        
        <div className="container-fluid mt-5">
          <div className="row">
            <main role="main" className="col-lg-12 d-flex">
              { this.state.loading
                ? <div id="loader" className="text-center"><p className="text-center">Loading...</p></div>
                : <Main
                  products={this.state.products}
                  productss={this.state.productss}
                  createProduct={this.createProduct}
                 // createProduct1={this.createProduct1}
                  //purchaseProduct={this.purchaseProduct}
                   />
              }
            </main>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
