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
import NotificationSystem from "react-notification-system";

import AdminNavbar from "components/Navbars/AdminNavbar";
<<<<<<< HEAD
// import Footer from "components/Footer/Footer";
import Sidebar from "components/Sidebar/Sidebar";
import './Admin.css';
import SignInForm from "components/SignInForm/SignInForm.jsx";
import SignUpForm from "components/SignUpForm/SignUpForm.jsx";

import { HashRouter as Router, Switch, Route, Link, NavLink } from 'react-router-dom';
import Dashboard from "views/Dashboard.jsx";
=======
//import Footer from "components/Footer/Footer";
import Sidebar from "components/Sidebar/Sidebar";
import "./Admin.css";
/* import SignInForm from "components/SignInForm/SignInForm.jsx";
import SignUpForm from "components/SignUpForm/SignUpForm.jsx"; */

import { HashRouter as Router, Switch, Route } from "react-router-dom";
>>>>>>> f2024770a70793b5f5ec64ded646958124ec9164

import { style } from "variables/Variables.jsx";

import routes from "routes.js";
<<<<<<< HEAD
import Notifications from "views/Notifications.jsx";


class Admin extends Component {
  constructor() {
    super();
    this.state = ({
=======

class Admin extends Component {
  constructor(props) {
    super(props);
    this.state = {
>>>>>>> f2024770a70793b5f5ec64ded646958124ec9164
      _notificationSystem: null,

      color: "purple",
      //  gradient

<<<<<<< HEAD
      fixedClasses: "dropdown show-dropdown open",
    });

=======
      fixedClasses: "dropdown show-dropdown open"
    };
>>>>>>> f2024770a70793b5f5ec64ded646958124ec9164
  }
  handleNotificationClick = position => {
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
      autoDismiss: 15
    });
  };
  getRoutes = routes => {
    return routes.map((prop, key) => {
      if (prop.layout === "/admin") {
        return (
          <Route
            path={prop.layout + prop.path}
            render={props => (
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
  getBrandText = path => {
    for (let i = 0; i < routes.length; i++) {
      if (
        this.props.location.pathname.indexOf(
          routes[i].layout + routes[i].path
        ) !== -1
      ) {
        return routes[i].name;
      }
    }
    return "Brand";
  };
  // handleImageClick = image => {
  //   this.setState({ image: image });
  // };
  handleColorClick = color => {
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
<<<<<<< HEAD
  
=======
>>>>>>> f2024770a70793b5f5ec64ded646958124ec9164
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
<<<<<<< HEAD

=======
>>>>>>> f2024770a70793b5f5ec64ded646958124ec9164
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
<<<<<<< HEAD

  render() {
    return (


      <div className="wrapper">
      <NotificationSystem ref="notificationSystem" style={style} />
      <Sidebar {...this.props} routes={routes}
      color={this.state.color}
     />
      <div id="main-panel" className="main-panel" ref="mainPanel">
        <div class="header">
        <AdminNavbar
          {...this.props}
          brandText={this.getBrandText(this.props.location.pathname)}
        />
         </div>

        <Switch>{this.getRoutes(routes)}</Switch>
        {/* <Footer /> */}

      </div>
    </div>








=======
  render() {
    return (
      <div className="wrapper">
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
        </div>
      </div>
>>>>>>> f2024770a70793b5f5ec64ded646958124ec9164
    );
  }
}

export default Admin;
