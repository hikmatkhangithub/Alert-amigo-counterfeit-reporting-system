import React, { Component } from "react";
import { fire, facebookProvider } from "components/Config/FirebaseAuth";
//import fire from "components/config/Fire";
import Home from "views/Home.jsx";
import { Modal, Button } from "react-bootstrap";
import { Route } from "react-router-dom";

class Logout extends Component {
  constructor(props) {
    super(props);
    this.logout = this.logout.bind(this);
  }

  logout() {
    fire
      .auth()
      .signOut()
      .then(function() {
        Route.history.push("/");
        console.log("sign out success");
      })
      .catch(function(error) {
        console.log("error");
      });
  }

  render() {
    return (
      <div className="content-margin">
        <h4>Are you sure you want to logout?</h4>
        <button onClick={this.logout}>Logout</button>
      </div>
    );
  }
}

export default Logout;
