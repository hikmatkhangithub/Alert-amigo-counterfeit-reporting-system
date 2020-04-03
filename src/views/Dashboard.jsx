import React, { Component } from "react";
//import sideimage from "./images/sideimage.jpg";
import SignInForm from "components/SignInForm/SignInForm.jsx";
import SignUpForm from "components/SignUpForm/SignUpForm.jsx";
import Notification from "views/Notifications";
import {
  BrowserRouter as Router,
  Route,
  Link,
  NavLink,
  Redirect
} from "react-router-dom";
import { fire, facebookProvider } from "components/Config/Fire";
import Home from "./Home";
import AdminLayout from "layouts/Admin";

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.login = this.login.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.signup = this.signup.bind(this);
    this.state = {
      email: "",
      password: "",
      user: {},
      isAdmin: false
    };
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

        // --------admin condition--------------
        if (user.uid === "BMztOE7tjuUIkFN51WINxlqMaT82") {
          this.setState({ isAdmin: true });
          /*   alert("This is admin account " + this.state.isAdmin); */
        } else {
          this.setState({ isAdmin: false });
        }
      } else {
        this.setState({ user: null });
        localStorage.removeItem("user");
      }
    });
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  login(e) {
    e.preventDefault();
    fire
      .auth()
      .signInWithEmailAndPassword(this.state.email, this.state.password)
      .then(u => {})
      .catch(error => {
        alert("Not a valid username and password");
        console.log(error);
      });
  }

  signup(e) {
    e.preventDefault();
  }
  render() {
    return (
      <div>
        {this.state.user ? (
          <Home />
        ) : (
          <Router>
            <div className="App">
              <div className="App__Aside">
                <div className="backside-image">
                  {/*  <img
                    src={sideimage}
                    style={{ width: "560px", height: "721px" }}
                  /> */}
                </div>
              </div>
              <div className="App__Form">
                <div className="PageSwitcher">
                  <NavLink
                    to="/"
                    activeClassName="PageSwitcher__Item--Active"
                    className="PageSwitcher__Item"
                  >
                    Sign In
                  </NavLink>

                  <NavLink
                    exact
                    to="/signup"
                    activeClassName="PageSwitcher__Item--Active"
                    className="PageSwitcher__Item"
                  >
                    Sign Up
                  </NavLink>
                </div>

                <div className="FormTitle">
                  <NavLink
                    to="/"
                    activeClassName="FormTitle__Link--Active"
                    className="FormTitle__Link"
                  >
                    Sign In
                  </NavLink>{" "}
                  or{" "}
                  <NavLink
                    exact
                    to="/signup"
                    activeClassName="FormTitle__Link--Active"
                    className="FormTitle__Link"
                  >
                    Sign Up
                  </NavLink>
                </div>
                <Route exact path="/" component={SignInForm}></Route>
                <Route path="/signup" component={SignUpForm}></Route>
              </div>
            </div>
          </Router>
        )}
      </div>
    );
  }
}

export default Dashboard;
