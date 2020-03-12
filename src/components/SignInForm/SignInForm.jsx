import React, { Component } from 'react';
// import { Link } from 'react-router-dom';

import { BrowserRouter as Router, Switch, Route, Link, NavLink } from 'react-router-dom';
import NotificationSystem from "react-notification-system";

import AdminNavbar from "components/Navbars/AdminNavbar";
// import Footer from "components/Footer/Footer";
import Sidebar from "components/Sidebar/Sidebar";
import routes from "routes.js";
import { style } from "variables/Variables.jsx";
import { GoogleLogin } from 'react-google-login';
import AdminLayout from "layouts/Admin.jsx";
const responseGoogle = (response) => {
  console.log(response);
}

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
           <button className="FormField__Button mr-20">
           <a style={{color:"#333"}} href="http://localhost:3000/admin/notifications">Sign In</a></button>


                  <Link to="/" className="FormField__Link">Create an account</Link>
              </div>
            </form>
            <GoogleLogin
    clientId="183099722142-9haefi6uujk35m14oj7gis242udq649t.apps.googleusercontent.com"
    buttonText="Login"
    onSuccess={responseGoogle}
    onFailure={responseGoogle}
    cookiePolicy={'single_host_origin'}
  />
          </div>

        );
    }
}

export default SignInForm;
