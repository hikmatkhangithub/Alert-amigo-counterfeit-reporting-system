import React, { Component } from "react";
import Suggestions from "./Suggestions";

import { Link } from "react-router-dom";
import { Form, FormControl, FormCheck, Col } from "react-bootstrap";
import { FormGroup, ControlLabel, HelpBlock } from "react-bootstrap";
import axios from "axios";

import "./Typography.css";
function FieldGroup({ id, label, help, ...props }) {
  return (
    <FormGroup controlId={id}>
      <ControlLabel>{label}</ControlLabel>
      <FormControl {...props} />
      {help && <HelpBlock>{help}</HelpBlock>}
    </FormGroup>
  );
}

const { API_KEY } = "2caa57ac-0f99-48f3-9baa-8217978f9be9";
const API_URL = "https://alert-amigo-api.herokuapp.com/products";

class UserProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      query: "",
      isLoading: false,
      results: []
    };
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  getInfo = () => {
    axios
      .get(`https://alert-amigo-api.herokuapp.com/products?${this.state.query}`)
      .then(({ data }) => {
        this.setState({
          results: data.data
        });
        console.log(data.data);
      });
  };

  handleInputChange = () => {                             // Handling input change
    console.log("search value", this.search.value);
    this.setState(
      {
        query: this.search.value
      },
      () => {
        if (this.state.query && this.state.query.length > 1) {
          if (this.state.query.length % 2 === 0) {
            this.getInfo();
          }
        } else if (!this.state.query) {
          alert("the input value is not correct");
        }
      }
    );
  };

  render() {
    return (
      <div>
      <h2 class="a">Search Report</h2>
      <hr class="new1"></hr>
      <div className="form-group mr-sm-2">
      <form class="cool">
      
        <input
        placeholder="Search for..."
        ref={input => this.search = input}
         onChange={this.handleInputChange}
         className="form-control"
        />
       <Suggestions results={this.state.results} />
     
    </form>
    </div>
      </div>
    )
  }
}

export default UserProfile;