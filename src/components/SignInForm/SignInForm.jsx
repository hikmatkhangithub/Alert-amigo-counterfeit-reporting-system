import React, { Component } from 'react';
<<<<<<< HEAD
import { Link } from 'react-router-dom';
import { fire, facebookProvider } from 'components/Config/Fire';
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';
import SignUpForm from "components/SignUpForm/SignUpForm.jsx";
import { Toaster, Intent } from '@blueprintjs/core';
class SignInForm extends Component {
  constructor(props) {
    super(props);
    this.login = this.login.bind(this);
    this.authWithFacebook = this.authWithFacebook.bind(this);
    this.handleChange = this.handleChange.bind(this);

    this.state = {
      email: '',
      password: ''
    };
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }
  authWithFacebook() {
    console.log("authed with facebook");
    fire.auth().signInWithRedirect(facebookProvider)
     .then((result, error) => {
       if (error) {
         this.toaster.show({ intent: Intent.DANGER, message: "Unable to sign in with Facebook" })
       } else{
         this.setState({ redirect: true })
       }

     })
  }
  login(e) {
    e.preventDefault();
    fire.auth().signInWithEmailAndPassword(this.state.email, this.state.password).then((u)=>{
    }).catch((error) => {
        console.log(error);
        alert(error);
      });
  }


  render() {
    return (


       <div className="col-md-6">
       <Toaster ref={(element) => { this.toaster = element }} />
       <div className="FormTitle1">Sign In</div>
       <form>
      <div className="form-group">
       <label htmlFor="exampleInputEmail1">Email address</label>
       <input value={this.state.email} onChange={this.handleChange} type="email" name="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
       <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
      </div>
       <div className="form-group">
      <label htmlFor="exampleInputPassword1">Password</label>
      <input value={this.state.password} onChange={this.handleChange} type="password" name="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
      </div>
      <button style={{width:"100%"}} type="submit" onClick={this.login} className="popup1-button">Login</button>
      <div style={{color:"black", textAlign:"center"}}>or</div>
      <button style={{width: "100%", backgroundColor:"#29487d"}} onClick={() => { this.authWithFacebook() }}>Log In with Facebook</button>

 </form>

 </div>

    );
  }
}
=======
// import { Link } from 'react-router-dom';

import { BrowserRouter as Router, Switch, Route, Link, NavLink } from 'react-router-dom';
import NotificationSystem from "react-notification-system";

import AdminNavbar from "components/Navbars/AdminNavbar";
// import Footer from "components/Footer/Footer";
import Sidebar from "components/Sidebar/Sidebar";
import routes from "routes.js";
import { style } from "variables/Variables.jsx";


class SignInForm extends Component {
    constructor() {
        super();

        this.state = {
            email: '',
            password: ''
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
        let target = e.target;
        let value = target.type === 'checkbox' ? target.checked : target.value;
        let name = target.name;

        this.setState({
          [name]: value
        });
    }

    handleSubmit(e) {
        e.preventDefault();

        console.log('The form was submitted with the following data:');
        console.log(this.state);
          this.props.history.push("admin/notifications");

    }

    render() {
        return (
        <div className="FormCenter">
            <form onSubmit={this.handleSubmit} className="FormFields" onSubmit={this.handleSubmit}>
            <div className="FormField">
                <label className="FormField__Label" htmlFor="email">E-Mail Address</label>
                <input type="email" id="email" className="FormField__Input" placeholder="Enter your email" name="email" value={this.state.email} onChange={this.handleChange} />
              </div>

              <div className="FormField">
                <label className="FormField__Label" htmlFor="password">Password</label>
                <input type="password" id="password" className="FormField__Input" placeholder="Enter your password" name="password" value={this.state.password} onChange={this.handleChange} />
              </div>

              <div className="FormField">
                  <button className="FormField__Button mr-20">Sign In</button> <Link to="/" className="FormField__Link">Create an account</Link>
              </div>
            </form>
          </div>
        );
    }
}

>>>>>>> f2024770a70793b5f5ec64ded646958124ec9164
export default SignInForm;
