import React, { Component } from "react";
import { Link } from "react-router-dom";
import { fire, facebookProvider } from "components/Config/FirebaseAuth";
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";

// Sign Up Form component
class SignUpForm extends Component {          
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.signup = this.signup.bind(this);
    this.state = {
      email: "",
      password: ""
    };
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

// Firebase signup() authentication function
  signup(e) {                     
    e.preventDefault();
    fire
      .auth()
      .createUserWithEmailAndPassword(this.state.email, this.state.password)
      .then(u => {})
      .then(u => {
        alert(
          "You are successfully registered! Please remember your credentials for future login."
        );
      })
      .catch(error => {
        console.log(error);
        alert(error);
      });
  }
// render() function for signup form
  render() {
    return (
      <div className="col-md-8">
        <div className="FormTitle1">Sign Up</div>
        <form>
          <div className="form-group">
            <label htmlFor="exampleInputEmail1">Email address</label>
            <input
              value={this.state.email}
              onChange={this.handleChange}
              type="email"
              name="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Enter email"
            />
            <small id="emailHelp" class="form-text text-muted">
              We'll never share your email with anyone else.
            </small>
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputPassword1">Password</label>
            <input
              value={this.state.password}
              onChange={this.handleChange}
              type="password"
              name="password"
              className="form-control"
              id="exampleInputPassword1"
              placeholder="Password"
            />
          </div>
          <div>
            <button
              onClick={this.signup}
              style={{ width: "100%" }}
              className="popup1-button"
            >
              Signup
            </button>
          </div>
        </form>
      </div>
    );
  }
}
export default SignUpForm;
