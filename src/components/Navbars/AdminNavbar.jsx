import React, { Component } from "react";
import { Navbar } from "react-bootstrap";
import { Redirect } from "react-router-dom";
// import AdminNavbarLinks from "./AdminNavbarLinks.jsx";
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
