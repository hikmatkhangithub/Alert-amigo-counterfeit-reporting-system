import React, { Component } from "react";

class Maps extends React.Component {
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
        <div className="container1">
          {products.map(item => (
            <div class="content">
              <div class="container">
                <div class="row">
                  <div class="col-md-12">
                    <div class="card card-margin" key={item.id}>
                      <div class="card-title title-center">
                        {item.productName}
                      </div>
                      <hr class="new2" />
                      <div class="card-content">
                        <p style={{ color: "#333" }}>
                          <b>Product Price:</b> {item.productPrice}{" "}
                        </p>
                        <p style={{ color: "#333" }}>
                          <b>Product Category:</b>
                          {item.productCategory}
                        </p>
                        <p style={{ color: "#333" }}>
                          <b>Product Brand:</b>
                          {item.productBrand}
                        </p>
                        <p style={{ color: "#333" }}>
                          <b>Country Of Origin:</b>
                          {item.countryOfOrigin}
                        </p>
                        <p style={{ color: "#333" }}>
                          <b>Risk Type:</b> {item.riskType}
                        </p>
                        <p style={{ color: "#333" }}>
                          <b>Alert Submitted By:</b>
                          {item.alertSubmittedBy}
                        </p>
                        <p style={{ color: "#333" }}>
                          <b>City:</b>
                          {item.yourCity}
                        </p>
                        <p style={{ color: "#333" }}>
                          <b>Address:</b>
                          {item.yourAddress}
                        </p>
                        <p style={{ color: "#333" }}>
                          <b>Description about the product:</b>
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      );
    }
  }
}
export default Maps;
