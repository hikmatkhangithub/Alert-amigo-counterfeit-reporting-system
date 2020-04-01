import React, { Component } from "react";
import { Link } from "react-router-dom";
import { fire, facebookProvider } from "components/Config/Fire";
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";
import SignUpForm from "components/SignUpForm/SignUpForm.jsx";
import { Toaster, Intent } from "@blueprintjs/core";
class SignInForm extends Component {
  constructor(props) {
    super(props);
    this.login = this.login.bind(this);
    this.authWithFacebook = this.authWithFacebook.bind(this);
    this.handleChange = this.handleChange.bind(this);

    this.state = {
      email: "",
      password: ""
    };
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }
  authWithFacebook() {
    console.log("authed with facebook");
    fire
      .auth()
      .signInWithRedirect(facebookProvider)
      .then((result, error) => {
        if (error) {
          this.toaster.show({
            intent: Intent.DANGER,
            message: "Unable to sign in with Facebook"
          });
        } else {
          this.setState({ redirect: true });
        }
      });
  }
  login(e) {
    e.preventDefault();
    fire
      .auth()
      .signInWithEmailAndPassword(this.state.email, this.state.password)
      .then(u => {})
      .catch(error => {
        console.log(error);
        alert(error);
      });
  }

  render() {
    return (
      <div className="col-md-6">
        <Toaster
          ref={element => {
            this.toaster = element;
          }}
        />
        <div className="FormTitle1">Sign In</div>
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
          <button
            style={{ width: "100%" }}
            type="submit"
            onClick={this.login}
            className="popup1-button"
          >
            Login
          </button>
          <div style={{ color: "black", textAlign: "center" }}>or</div>
          <button
            style={{ width: "100%", backgroundColor: "#29487d" }}
            onClick={() => {
              this.authWithFacebook();
            }}
          >
            Log In with Facebook
          </button>
        </form>
      </div>
    );
  }
}
export default SignInForm;
