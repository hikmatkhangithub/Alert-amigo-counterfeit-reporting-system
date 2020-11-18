import React, { Component } from "react";
import NotificationSystem from "react-notification-system";

import AdminNavbar from "components/Navbars/AdminNavbar";
import "./Admin.css";
import { fire, facebookProvider } from "components/Config/FirebaseAuth";
import Sidebar from "components/Sidebar/Sidebar";
import sideimage from "./mainPageLogo.jpg";
import SignInForm from "components/SignInForm/SignInForm.jsx";
import SignUpForm from "components/SignUpForm/SignUpForm.jsx";
import { style } from "variables/Variables.jsx";
import routes from "routes.js";
import {
  HashRouter as Router,
  Switch,
  Route,
  Link,
  NavLink,
} from "react-router-dom";


class Admin extends Component {
  constructor() {
    super();
    this.state = {
      _notificationSystem: null,

      color: "purple",
      //  gradient

      fixedClasses: "dropdown show-dropdown open",
      email: "",
      password: "",
      user: {},
      isAdmin: false,
    };
    this.login = this.login.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.signup = this.signup.bind(this);
  }
  handleNotificationClick = (position) => {
    var color = Math.floor(Math.random() * 4 + 1);
    var level;
    switch (color) {
      case 1:
        level = "success";
        break;
      case 2:
        level = "warning";
        break;
      case 3:
        level = "error";
        break;
      case 4:
        level = "info";
        break;
      default:
        break;
    }
    this.state._notificationSystem.addNotification({
      title: <span data-notify="icon" className="pe-7s-gift" />,
      message: (
        <div>
          Welcome to <b>Light Bootstrap Dashboard</b> - a beautiful freebie for
          every web developer.
        </div>
      ),
      level: level,
      position: position,
      autoDismiss: 15,
    });
  };
  getRoutes = (routes) => {
    return routes.map((prop, key) => {
      if (prop.layout === "/admin") {
        return (
          <Route
            path={prop.layout + prop.path}
            render={(props) => (
              <prop.component
                {...props}
                handleClick={this.handleNotificationClick}
              />
            )}
            key={key}
          />
        );
      } else {
        return null;
      }
    });
  };
  getBrandText = (path) => {
    for (let i = 0; i < routes.length; i++) {
      if (
        this.props.location.pathname.indexOf(
          routes[i].layout + routes[i].path
        ) !== -1
      ) {
        return routes[i].name;
      }
    }
    return "BrandNew ";
  };
  // handleImageClick = image => {
  //   this.setState({ image: image });
  // };
  handleColorClick = (color) => {
    this.setState({ color: color });
  };
  // handleHasImage = hasImage => {
  //   this.setState({ hasImage: hasImage });
  // };
  handleFixedClick = () => {
    if (this.state.fixedClasses === "dropdown") {
      this.setState({ fixedClasses: "dropdown show-dropdown open" });
    } else {
      this.setState({ fixedClasses: "dropdown" });
    }
  };
  componentDidMount() {
    this.setState({ _notificationSystem: this.refs.notificationSystem });
    var _notificationSystem = this.refs.notificationSystem;
    var color = Math.floor(Math.random() * 4 + 1);
    var level;
    switch (color) {
      case 1:
        level = "success";
        break;
      case 2:
        level = "warning";
        break;
      case 3:
        level = "error";
        break;
      case 4:
        level = "info";
        break;
      default:
        break;
    }

    this.authListener();
  }
  componentDidUpdate(e) {
    if (
      window.innerWidth < 993 &&
      e.history.location.pathname !== e.location.pathname &&
      document.documentElement.className.indexOf("nav-open") !== -1
    ) {
      document.documentElement.classList.toggle("nav-open");
    }
    if (e.history.action === "PUSH") {
      document.documentElement.scrollTop = 0;
      document.scrollingElement.scrollTop = 0;
      this.refs.mainPanel.scrollTop = 0;
    }
  }
  authListener() {                                    // Authentication listener function
    fire.auth().onAuthStateChanged((user) => {
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

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  login(e) {                                    // Login function for user
    e.preventDefault();
    fire
      .auth()
      .signInWithEmailAndPassword(this.state.email, this.state.password)
      .then((u) => {})
      .catch((error) => {
        alert("Not a valid username and password");
        console.log(error);
      });
  }

  signup(e) {                                   // Sign up function for user
    e.preventDefault();
  }
  render() {
    return (
      <div className="wrapper">
        {this.state.user ? (
          <div>
            <NotificationSystem ref="notificationSystem" style={style} />
            <Sidebar {...this.props} routes={routes} color={this.state.color} />
            <div id="main-panel" className="main-panel" ref="mainPanel">
              <div className="header">
                <AdminNavbar
                  {...this.props}
                  brandText={this.getBrandText(this.props.location.pathname)}
                />
              </div>

              <Switch>{this.getRoutes(routes)}</Switch>
              {/* <Footer /> */}
            </div>{" "}
          </div>
        ) : (
          <Router>
            <div className="App">
              <div className="App__Aside">
                <div className="backside-image">
                  <img
                    src={sideimage}
                    style={{ width: "560px", height: "auto" }}
                  />
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

export default Admin;
