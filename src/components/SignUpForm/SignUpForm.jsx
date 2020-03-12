import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
class SignUpForm extends Component {
    constructor() {
        super();

        this.state = {
            Email: '',
            Password: '',
            Name: '',
            hasAgreed: false
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

handleChange = (event) => {
  this.setState({Name: this.name.value});
  this.setState({Email: this.email.value});
  this.setState({Password: this.password.value});
}


handleSubmit = (event) => {
  console.log(this.name.value);
  console.log(this.email.value);
  console.log(this.password.value);
  console.log('The form was submitted with the following data:');

event.preventDefault();
const form = new FormData();
form.append('name', this.name.value);
form.append('email', this.email.value);
form.append('password', this.password.value);
axios.post('https://alert-amigo-api.herokuapp.com/users/signup', form, {
  headers: { 'Content-Type': 'multipart/form-data' }
});
}

    render() {
        return (
        <div className="FormCenter">
            <form onSubmit={this.handleSubmit} className="FormFields">
              <div className="FormField">
                <label className="FormField__Label" htmlFor="name">Full Name</label>
                <input type="text" id="name" className="FormField__Input" placeholder="Enter your full name" name="name"  ref={(input) => { this.name = input }} onChange={this.handleChange}  />
              </div>
              <div className="FormField">
                <label className="FormField__Label" htmlFor="password">Password</label>
                <input type="password" id="password" className="FormField__Input" placeholder="Enter your password" name="password" ref={(input) => { this.password = input }} onChange={this.handleChange} />
              </div>
              <div className="FormField">
                <label className="FormField__Label" htmlFor="email">E-Mail Address</label>
                <input type="email" id="email" className="FormField__Input" placeholder="Enter your email" name="email" ref={(input) => { this.email = input }} onChange={this.handleChange} />
              </div>

              {/* <div className="FormField">
                <label className="FormField__CheckboxLabel">
                    <input className="FormField__Checkbox" type="checkbox" name="hasAgreed" value={this.state.hasAgreed} onChange={this.handleChange} /> I agree all statements in <a href="" className="FormField__TermsLink">terms of service</a>
                </label>
              </div> */}

              <div className="FormField">
                  <button type="submit" className="FormField__Button mr-20" onClick ={this.onClickHandler}>Sign Up</button> <Link to="/sign-in" className="FormField__Link">I'm already member</Link>
              </div>
            </form>
          </div>
        );
    }
}

export default SignUpForm;
