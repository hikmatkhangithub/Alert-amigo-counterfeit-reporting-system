/*!

=========================================================
* Light Bootstrap Dashboard React - v1.3.0
=========================================================

* Product Page: https://www.creative-tim.com/product/light-bootstrap-dashboard-react
* Copyright 2019 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/light-bootstrap-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/

import React, { Component } from "react";
import { Navbar } from "react-bootstrap";
import { Redirect } from "react-router-dom";
import { fire, facebookProvider } from "components/Config/FirebaseAuth";
import { Route } from "react-router-dom";

class Header extends Component {
  constructor(props) {
    super(props);
    this.mobileSidebarToggle = this.mobileSidebarToggle.bind(this);
    this.logout = this.logout.bind(this);
    this.state = {
      sidebarExists: false
    };
  }
// apply toggle while application is in mobile mode
  mobileSidebarToggle(e) {
    if (this.state.sidebarExists === false) {
      this.setState({
        sidebarExists: true
      });
    }
    e.preventDefault();
    document.documentElement.classList.toggle("nav-open");
    var node = document.createElement("div");
    node.id = "bodyClick";
    node.onclick = function() {
      this.parentElement.removeChild(this);
      document.documentElement.classList.toggle("nav-open");
    };
    document.body.appendChild(node);
  }
  // Firebase logout function
  logout() {
    fire
      .auth()
      .signOut()
      .then(function() {
     
        console.log("sign out success");
      })
      .catch(function(error) {
        console.log("error");
      });
  }
  render() {
    return (
      <Navbar fluid>
        <Navbar.Header>
          <Navbar.Brand>
           
            <a href="#pablo">{this.props.brandText}</a>
            
          </Navbar.Brand>
          <div className="logout-button-div">
            <button className="logout-button-top" onClick={this.logout}>Logout</button>
            </div>
          <Navbar.Toggle onClick={this.mobileSidebarToggle} />
        </Navbar.Header>
        <Navbar.Collapse>{/* <AdminNavbarLinks /> */}</Navbar.Collapse>
      </Navbar>
    );
  }
}

export default Header;
