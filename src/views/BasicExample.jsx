import React from "react";

import "bootstrap/dist/css/bootstrap.min.css";

import Home from "views/Home";

import { fire, facebookProvider } from "components/Config/Fire";
//import fire from "components/config/Fire";
import SignInForm from "components/SignInForm/SignInForm.jsx";
import Notifications from "views/Notifications.jsx";
import Dashboard from "views/Dashboard.jsx";
import Logout from "components/Logout/Logout.jsx";
class BasicExample extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {}
    };
    this.authListener = this.authListener.bind(this);
  }

  componentDidMount() {
    this.authListener();
  }

  authListener() {
    fire.auth().onAuthStateChanged(user => {
      console.log(user);
      if (user) {
        this.setState({ user });
        localStorage.setItem("user", user.uid);
      } else {
        this.setState({ user: null });
        localStorage.removeItem("user");
      }
    });
  }
  render() {
    return (
      <div>
        <div>{this.state.user ? <Home /> : <Dashboard />}</div>
      </div>
    );
  }
}
export default BasicExample;
