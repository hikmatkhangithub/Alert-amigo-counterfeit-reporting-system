<<<<<<< HEAD
import React, { Component } from 'react';
import axios from 'axios';
import 'views/Typography.css';


class Main extends Component {

constructor(props) {
    super(props);

            this.state = {
                               productName: '',
                               productPrice: '',
                               productCategory: '',
                               productBrand: '',
                               countryOfOrigin: '',
                               riskType: '',
                               alertSubmittedBy: '',
                               yourCity: '',
                               yourAddress: '',
                               productImage: undefined,
                               description: '',
                               showMessage: false,

                   pname: '',
                   price: 0,
                   pCategory: '',
                   pBrand: '',
                   pCountryOfOrigin: '',

            }
           this.handleChange = this.handleChange.bind(this);
          this.handleChange1 = this.handleChange1.bind(this);
          this.handleChange2 = this.handleChange2.bind(this);
          this.onChangeHandlerPost = this.onChangeHandlerPost.bind(this);
          this.handleSubmit = this.handleSubmit.bind(this);
}


  
//---------------------on change of file-------------------
 handleChange(event) {
   this.setState({countryOfOrigin: event.target.value});
   console.log(this.state.countryOfOrigin);
  }
 handleChange1(event) {
   this.setState({riskType: event.target.value});
   console.log(this.state.riskType);
  }
   handleChange2(event) {
   this.setState({alertSubmittedBy: event.target.value});
   console.log(this.state.alertSubmittedBy);
  }
//-------------------------------------------------------
onChangeHandlerPost = event => {

this.setState({
  productImage: event.target.files[0]
});
  console.log(event.target.files[0]);
}

onClickHandler = (event) => {
  console.log("Clicked");
 
    this.setState({
      showMessage: true
    });
}
//----------------------------handle Submit----------------
handleSubmit = (event) =>{
        event.preventDefault();
        const form = new FormData()
            form.append('productName', this.productName.value);
            form.append('productPrice', this.productPrice.value);
            form.append('productCategory', this.productCategory.value);
            form.append('productBrand', this.productBrand.value);
            form.append('countryOfOrigin',this.state.countryOfOrigin);
            form.append('riskType', this.state.riskType);
            form.append('alertSubmittedBy', this.state.alertSubmittedBy);
            form.append('yourCity', this.yourCity.value);
            form.append('yourAddress', this.yourAddress.value);
            form.append('productImage', this.state.productImage);
            form.append('description', this.textArea.value);
        axios.post('https://alert-amigo-api.herokuapp.com/products', form, {
          headers: { 'Content-Type': 'multipart/form-data' },
        });

  this.setState({showMessage: true});


//---------------------------------------------------
                 const  pname = this.productName.value
                 const  price = this.productPrice.value
                 const  pCategory = this.productCategory.value
                 const  pBrand = this.productBrand.value
                 const  pCountryOfOrigin = this.state.countryOfOrigin
              
                this.props.createProduct(pname, price, pCategory, pBrand, pCountryOfOrigin)

                console.log(pname);
                console.log(price);
                console.log(pCategory);
                console.log(pBrand);
                console.log(pCountryOfOrigin);

}
  render() {
    return (
      <div id="content">

<div class="container1">
      <h2 class="abc">Submit Report</h2>
      <hr class="new1"/>
       <form onSubmit={this.handleSubmit} id="myForm" method='POST' encType='multipart/form-data'>
          <div className="form-group mr-sm-2">
           <label> Product Name: </label>
            <input
              id="productName"
              type="text"
              onChange={this.handleChangePost}
              ref={(input) => { this.productName = input }}
              className="form-control"
              placeholder="Product Name"
              required />
              
          </div>
          <div className="form-group mr-sm-2">
          <label> Product Price: </label>
            <input
              id="productPrice"
              type="text"
              onChange={this.handleChangePost}
              ref={(input) => { this.productPrice = input }}
              className="form-control"
              placeholder="Product Price"
              required />
          </div>
          <div className="form-group mr-sm-2">
          <label> Product Category: </label>
            <input
              id="productCategory"
              type="text"
              onChange={this.handleChangePost}
              ref={(input) => { this.productCategory = input }}
              className="form-control"
              placeholder="Product Catogory"
              required />
          </div>
          <div className="form-group mr-sm-2">
          <label> Brand Name: </label>
            <input
              id="productBrand"
              type="text"
              onChange={this.handleChangePost}
              ref={(input) => { this.productBrand = input }}
              className="form-control"
              placeholder="Product Brand"
              required />
          </div>
           <div className="form-group mr-sm-2">
           <label>
          Country of origin:
          <select id="countryoforigin" value={this.countryoforigin} onChange={this.handleChange} required>
          
            <option value="germany">Germany</option>
            <option value="united kingdom">United kingdom</option>
            <option value="turkey">Turkey</option>
            <option value="india">India</option>
            <option value="China">China</option>
            <option value="South Korea">South Korea</option>
          </select>
        </label>
        </div>
         <div className="form-group mr-sm-2">
         <label>
          Risk Type or Level:
          <select id="risktype" value={this.risktype} onChange={this.handleChange1} required>
           
            <option value="very low">very low</option>
            <option value="low">low</option>
            <option value="medium">medium</option>
            <option value="High">High</option>
          </select>
        </label>
        </div>
         <div className="form-group mr-sm-2">
         <label>
          Alert Submitted by:
          <select  id="alertsubmittedby" value={this.alertsubmittedby} onChange={this.handleChange2} required>
            <option value="consumer">Consumer</option>
            <option value="producer">Producer</option>
            <option value="supplier">Supplier</option>
            <option value="eu Authorities">Eu Authorities</option>
          </select>
        </label>
        </div>
        <label>Notifiers data</label>
         <div className="form-group mr-sm-2">
            <input
              id="yourCity"
              type="text"
              onChange={this.handleChangePost}
              ref={(input) => { this.yourCity = input }}
              className="form-control"
              placeholder="Your city"
              />
          </div>
           <div className="form-group mr-sm-2">
            <input
              id="yourAddress"
              type="text"
              onChange={this.handleChangePost}
              ref={(input) => { this.yourAddress = input }}
              className="form-control"
              placeholder="Your Address"
               />
          </div>
           <div className="form-group mr-sm-2">
           <label> Upload Images: </label>
            <input
              name="uploadFile"
              type="file"
              onChange={this.onChangeHandlerPost}
              ref={(input) => { this.uploadFile = input }}
              className="form-control"
              placeholder="upload Images"
               />
          </div>
          <div className="form-group mr-sm-2">
           <label> Description </label>
            <textarea
              name="textArea"
              onChange={this.handleChangePost}
              ref={(input) => { this.textArea = input }}
              className="form-control"
              placeholder="Write here.."
              col= "5"
              row = "15"
              />
          </div>
          <br/>
          <button type="submit" class="popup-button" >Add Product</button>
          <br/>
        </form>
        <br/>

            <div>   
              { this.state.showMessage && (<div class="alert alert-success">
  <strong>Success!</strong> successful submitted a report
</div>) }
            </div>

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
            { this.props.products.map((product, key) => {
              return(
                <tr key={key}>
                  <th scope="row">{product.id.toString()}</th>
                  <td> {product.pname}</td>
                  <td> {product.price.toString()}</td>
                  <td> {product.pCategory} </td>
                  <td> {product.pBrand}</td>
                  <td> {product.pCountryOfOrigin}</td>
                  <td> {product.owner}</td>
                </tr>
              )
            })}
          </tbody>
        </table>   
      </div>
      </div>
=======
import React, { Component } from "react";
import axios from "axios";
import "views/Typography.css";

class Main extends Component {
  constructor(props) {
    super(props);

    this.state = {
      productName: "",
      productPrice: "",
      productCategory: "",
      productBrand: "",
      countryOfOrigin: "",
      riskType: "",
      alertSubmittedBy: "",
      yourCity: "",
      yourAddress: "",
      productImage: undefined,
      description: "",
      showMessage: false,

      pname: "",
      price: 0,
      pCategory: "",
      pBrand: "",
      pCountryOfOrigin: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleChange1 = this.handleChange1.bind(this);
    this.handleChange2 = this.handleChange2.bind(this);
    this.onChangeHandlerPost = this.onChangeHandlerPost.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  //---------------------on change of file-------------------
  handleChange(event) {
    this.setState({ countryOfOrigin: event.target.value });
    console.log(this.state.countryOfOrigin);
  }
  handleChange1(event) {
    this.setState({ riskType: event.target.value });
    console.log(this.state.riskType);
  }
  handleChange2(event) {
    this.setState({ alertSubmittedBy: event.target.value });
    console.log(this.state.alertSubmittedBy);
  }
  //-------------------------------------------------------
  onChangeHandlerPost = event => {
    this.setState({
      productImage: event.target.files[0]
    });
    console.log(event.target.files[0]);
  };

  onClickHandler = event => {
    console.log("Clicked");

    this.setState({
      showMessage: true
    });
  };
  //----------------------------handle Submit----------------
  handleSubmit = event => {
    event.preventDefault();
    const form = new FormData();
    form.append("productName", this.productName.value);
    form.append("productPrice", this.productPrice.value);
    form.append("productCategory", this.productCategory.value);
    form.append("productBrand", this.productBrand.value);
    form.append("countryOfOrigin", this.state.countryOfOrigin);
    form.append("riskType", this.state.riskType);
    form.append("alertSubmittedBy", this.state.alertSubmittedBy);
    form.append("yourCity", this.yourCity.value);
    form.append("yourAddress", this.yourAddress.value);
    form.append("productImage", this.state.productImage);
    form.append("description", this.textArea.value);
    axios.post("https://alert-amigo-api.herokuapp.com/products", form, {
      headers: { "Content-Type": "multipart/form-data" }
    });

    this.setState({ showMessage: true });

    console.log("Clicked");
    //---------------------------------------------------
    const pname = this.productName.value;
    const price = this.productPrice.value;
    const pCategory = this.productCategory.value;
    const pBrand = this.productBrand.value;
    const pCountryOfOrigin = this.state.countryOfOrigin;

    this.props.createProduct(pname, price, pCategory, pBrand, pCountryOfOrigin);

    console.log(pname);
    console.log(price);
    console.log(pCategory);
    console.log(pBrand);
    console.log(pCountryOfOrigin);
  };
  render() {
    return (
      <div id="content">
        <div class="container1">
          <h2 class="abc">Submit Report</h2>
          <hr class="new1" />
          <form
            onSubmit={this.handleSubmit}
            id="myForm"
            method="POST"
            encType="multipart/form-data"
          >
            <div className="form-group mr-sm-2">
              <label> Product Name: </label>
              <input
                id="productName"
                type="text"
                onChange={this.handleChangePost}
                ref={input => {
                  this.productName = input;
                }}
                className="form-control"
                placeholder="Product Name"
                required
              />
            </div>
            <div className="form-group mr-sm-2">
              <label> Product Price: </label>
              <input
                id="productPrice"
                type="text"
                onChange={this.handleChangePost}
                ref={input => {
                  this.productPrice = input;
                }}
                className="form-control"
                placeholder="Product Price"
                required
              />
            </div>
            <div className="form-group mr-sm-2">
              <label> Product Category: </label>
              <input
                id="productCategory"
                type="text"
                onChange={this.handleChangePost}
                ref={input => {
                  this.productCategory = input;
                }}
                className="form-control"
                placeholder="Product Catogory"
                required
              />
            </div>
            <div className="form-group mr-sm-2">
              <label> Brand Name: </label>
              <input
                id="productBrand"
                type="text"
                onChange={this.handleChangePost}
                ref={input => {
                  this.productBrand = input;
                }}
                className="form-control"
                placeholder="Product Brand"
                required
              />
            </div>
            <div className="form-group mr-sm-2">
              <label>
                Country of origin:
                <select
                  id="countryoforigin"
                  value={this.countryoforigin}
                  onChange={this.handleChange}
                  required
                >
                  <option value="germany">Germany</option>
                  <option value="united kingdom">United kingdom</option>
                  <option value="turkey">Turkey</option>
                  <option value="india">India</option>
                  <option value="China">China</option>
                  <option value="South Korea">South Korea</option>
                </select>
              </label>
            </div>
            <div className="form-group mr-sm-2">
              <label>
                Risk Type or Level:
                <select
                  id="risktype"
                  value={this.risktype}
                  onChange={this.handleChange1}
                  required
                >
                  <option value="very low">very low</option>
                  <option value="low">low</option>
                  <option value="medium">medium</option>
                  <option value="High">High</option>
                </select>
              </label>
            </div>
            <div className="form-group mr-sm-2">
              <label>
                Alert Submitted by:
                <select
                  id="alertsubmittedby"
                  value={this.alertsubmittedby}
                  onChange={this.handleChange2}
                  required
                >
                  <option value="consumer">Consumer</option>
                  <option value="producer">Producer</option>
                  <option value="supplier">Supplier</option>
                  <option value="eu Authorities">Eu Authorities</option>
                </select>
              </label>
            </div>
            <label>Notifiers data</label>
            <div className="form-group mr-sm-2">
              <input
                id="yourCity"
                type="text"
                onChange={this.handleChangePost}
                ref={input => {
                  this.yourCity = input;
                }}
                className="form-control"
                placeholder="Your city"
              />
            </div>
            <div className="form-group mr-sm-2">
              <input
                id="yourAddress"
                type="text"
                onChange={this.handleChangePost}
                ref={input => {
                  this.yourAddress = input;
                }}
                className="form-control"
                placeholder="Your Address"
              />
            </div>
            <div className="form-group mr-sm-2">
              <label> Upload Images: </label>
              <input
                name="uploadFile"
                type="file"
                onChange={this.onChangeHandlerPost}
                ref={input => {
                  this.uploadFile = input;
                }}
                className="form-control"
                placeholder="upload Images"
              />
            </div>
            <div className="form-group mr-sm-2">
              <label> Description </label>
              <textarea
                name="textArea"
                onChange={this.handleChangePost}
                ref={input => {
                  this.textArea = input;
                }}
                className="form-control"
                placeholder="Write here.."
                col="5"
                row="15"
              />
            </div>
            <br />
            <button type="submit" class="popup-button">
              Add Product
            </button>
            <br />
          </form>
          <br />

          <div>
            {this.state.showMessage && (
              <div class="alert alert-success">
                <strong>Success!</strong> successful submitted a report
              </div>
            )}
          </div>

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
>>>>>>> f2024770a70793b5f5ec64ded646958124ec9164
      </div>
    );
  }
}

export default Main;
