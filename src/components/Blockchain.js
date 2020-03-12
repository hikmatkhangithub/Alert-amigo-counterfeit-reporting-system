import React, { Component } from 'react';
import Navbar from './Navbar'
import Main from './Main'
import App from './App'
import axios from 'axios';

class Blockchain extends Component {

constructor(props) {
    super(props);

this.state = {
                   productName: '',
                   productPrice: 0,
                   productCategory: '',
                   productBrand: '',
                   countryOfOrigin: '',
                   riskType: '',
                   alertSubmittedBy: '',
                   yourCity: '',
                   yourAddress: '',
                   productImage: undefined,
                   description: '',


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
   this.setState({countryoforigin: event.target.value});
  }
 handleChange1(event) {
   this.setState({risktype: event.target.value});
  }
   handleChange2(event) {
   this.setState({alertsubmittedby: event.target.value});
  }
//-------------------------------------------------------
onChangeHandlerPost = event => {

this.setState({
	productImage: event.target.files[0]
});
	console.log(event.target.files[0]);
}



//----------------------------handle Submit----------------
handleSubmit = (event) =>{
event.preventDefault();
 
             
const form = new FormData()

form.append('productName', this.productName.value);
form.append('productPrice', this.productPrice.value);
form.append('productCategory', this.productCategory.value);
form.append('productBrand', this.productBrand.value);
form.append('countryOfOrigin',this.state.countryoforigin);
form.append('riskType', this.state.riskType);
form.append('alertSubmittedBy', this.state.alertSubmittedBy);
form.append('yourCity', this.yourCity.value);
form.append('yourAddress', this.yourAddress.value);
form.append('productImage', this.state.productImage);
form.append('description', this.textArea.value);

axios.post('https://alert-amigo-api.herokuapp.com/products', form, {
  headers: { 'Content-Type': 'multipart/form-data' },
});


                 const  pname = this.productName.value
                 const  price = this.productPrice.value
                 const  pCategory = this.productCategory.value
                 const  pBrand = this.productBrand.value
                 const  pCountryOfOrigin = this.state.countryoforigin
                

          this.props.createProduct(pname, price, pCategory, pBrand, pCountryOfOrigin)
        //  this.props.createProduct1(pRiskType, pAlertSubmittedBy, pYourCity, pYourAddress, pUploadFile, pDescription)



}

  render() {
    return (     
      <div id="content">
      <Navbar account={this.state.account} />
      <h2>Blockchain</h2>
      <h2>Submitted report data</h2>

       <form onSubmit={this.handleSubmit} id="myForm" method='POST' encType='multipart/form-data'>
          <div className="form-group mr-sm-2">
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
          </select>
        </label>
        </div>
         <div className="form-group mr-sm-2">
         <label>
          Risk Type or Level:
          <select value={this.risktype} onChange={this.handleChange1} required>
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
          <select value={this.alertsubmittedby} onChange={this.handleChange2} required>
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
          <button type="submit" className="btn btn-primary" onClick ={this.onClickHandler}>Add Product</button>
        </form>
      </div>
    );
  }
}



export default Blockchain
