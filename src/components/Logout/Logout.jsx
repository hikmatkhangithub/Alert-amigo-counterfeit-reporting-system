import React, { Component } from "react";
import { fire, facebookProvider } from 'components/config/Fire';
//import fire from "components/config/Fire";
import Home from "views/Home.jsx";
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
        <button>
          <a href="http://localhost:3000/signin">Yes</a>
        </button>
        <button style={{ position: "relative", left: "30px" }}>
          <a href="http://localhost:3000/admin/notifications">No</a>
        </button>
        {/*<button><a href="http://localhost:3000/sign-in">Home</a></button>*/}
      </div>
    );
  }
}

export default Logout;
