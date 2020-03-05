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
//import { Row, Col, Alert, Container } from "react-bootstrap";
import "./Typography.css";
import Button from "components/CustomButton/CustomButton.jsx";
import Typography from "views/Typography.jsx";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
  Link,
  NavLink
} from "react-router-dom";
import "./Typography.css";
import search from "./search.png";
import report from "./report.png";
import alertsbell from "./alertsbell.png";
class Notifications extends Component {
  render() {
    return (
      <section className="wrapper">
        <div className="container-fostrap">
          <div>
            <h1 className="welcome">Welcome to Alert Amigo</h1>
            <hr className="new2" />
            <h4 className="notification-h4">Its simple and its quick.</h4>{" "}
            <h4 className="notification-h4">
              {" "}
              Follow these 3 steps to get started.
            </h4>
          </div>
          <div className="content">
            <div className="container">
              <div className="row">
                <div className="col-xs-12 col-md-3">
                  <div className="card">
                    <a
                      className="img-card"
                      href="http://localhost:3000/admin/user"
                    >
                      <img src={search} />
                    </a>
                    <div className="card-content">
                      <h4 className="card-title">
                        <a href="http://localhost:3000/admin/user">
                          {" "}
                          Step 1: Alert Search
                        </a>
                      </h4>
                      <p className="i">
                        Before reporting, check if this product exists in our
                        database. Proceed by entering the certificate details
                      </p>
                    </div>
                    <div className="card-read-more">
                      <button type="submit" className="popup1-button">
                        <a
                          className="l"
                          href="http://localhost:3000/admin/user"
                        >
                          Know More
                        </a>
                      </button>
                    </div>
                  </div>
                </div>
                <div className="col-xs-12 col-md-3">
                  <div className="card">
                    <a
                      className="img-card"
                      href="http://localhost:3000/admin/typography"
                    >
                      <img src={report} />
                    </a>
                    <div className="card-content">
                      <h4 className="card-title">
                        <a href="http://localhost:3000/admin/typography">
                          {" "}
                          Step 2: Amigo Report
                        </a>
                      </h4>
                      <p className="i">
                        If the details does not exist in the search results,
                        then proceed to Report the product by clicking here.
                      </p>
                    </div>
                    <div className="card-read-more">
                      <button type="submit" className="popup1-button">
                        <a
                          className="l"
                          href="http://localhost:3000/admin/typography"
                        >
                          Know More
                        </a>
                      </button>
                    </div>
                  </div>
                </div>
                <div className="col-xs-12 col-md-3">
                  <div className="card">
                    <a
                      className="img-card"
                      href="http://localhost:3000/admin/maps"
                    >
                      <img src={alertsbell} />
                    </a>
                    <div className="card-content">
                      <h4 className="card-title">
                        <a href="http://localhost:3000/admin/maps">
                          Step 3: All Amigo Alerts
                        </a>
                      </h4>
                      <p className="i">
                        You can check Alerts created by others here. This is a
                        great way to know what kind of products are hazardous.
                      </p>
                    </div>
                    <div className="card-read-more">
                      <button type="submit" className="popup1-button">
                        <a
                          className="l"
                          href="http://localhost:3000/admin/maps"
                        >
                          Know More
                        </a>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Notifications;
