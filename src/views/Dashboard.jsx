import React, { Component } from "react";
import ChartistGraph from "react-chartist";
import { Grid, Row, Col } from "react-bootstrap";
import sideimage from "./images/sideimage.jpg";
import { Card } from "components/Card/Card.jsx";
import { StatsCard } from "components/StatsCard/StatsCard.jsx";
import { Tasks } from "components/Tasks/Tasks.jsx";
import { responsiveBar, legendBar } from "variables/Variables.jsx";
import SignInForm from "components/SignInForm/SignInForm.jsx";
import SignUpForm from "components/SignUpForm/SignUpForm.jsx";

import {
  BrowserRouter as Router,
  Route,
  Link,
  NavLink
} from "react-router-dom";
import fire from "components/config/Fire";

class Dashboard extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <div className="App__Aside">
            <div className="backside-image">
              <img
                src={sideimage}
                style={{ width: "560px", height: "721px" }}
              />
            </div>
          </div>
          <div className="App__Form">
            <div className="PageSwitcher">
              <NavLink
                to="/signin"
                activeClassName="PageSwitcher__Item--Active"
                className="PageSwitcher__Item"
              >
                Sign In
              </NavLink>
              <NavLink
                exact
                to="/"
                activeClassName="PageSwitcher__Item--Active"
                className="PageSwitcher__Item"
              >
                Sign Up
              </NavLink>
            </div>

            <div className="FormTitle">
              <NavLink
                to="/signin"
                activeClassName="FormTitle__Link--Active"
                className="FormTitle__Link"
              >
                Sign In
              </NavLink>{" "}
              or{" "}
              <NavLink
                exact
                to="/"
                activeClassName="FormTitle__Link--Active"
                className="FormTitle__Link"
              >
                Sign Up
              </NavLink>
            </div>

            <Route exact path="/" component={SignUpForm}></Route>
            <Route path="/signin" component={SignInForm}></Route>
          </div>
        </div>
      </Router>
    );
  }
}

export default Dashboard;
