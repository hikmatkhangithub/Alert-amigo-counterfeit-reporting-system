import React from "react";

import { Table, Grid, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Switch, Redirect, Link } from "react-router-dom";
import AdminLayout from "layouts/Admin.jsx";
import { fire, facebookProvider } from "components/config/Fire";
//import fire from "components/config/Fire";
// import "./main.css";
// import Home from "./views/Home";

// import './Abc.css';
class Home extends React.Component {
  constructor(props) {
    super(props);
    this.logout = this.logout.bind(this);
  }

  logout() {
    fire.auth().signOut();
  }

  render() {
    return (
      <div className="wrapper" style={{ backgroundColor: "#8a2be24d" }}>
        <div style={{ textAlign: "center", verticalAlign: "middle" }}>
          <div class="navbar">
            <p className="paracolor" style={{ backgroundColor: "gray" }}>
              {" "}
              This website does not belong to a real company. It is a Planspiel
              Web Engineering Project
            </p>
          </div>
          <div style={{ padding: "6em" }}>
            <h1 class="welcome">Alert Amigo</h1>
            <hr class="new2" />
            <Route path="/admin" render={props => <AdminLayout {...props} />} />
            <div
              class="card"
              style={{ width: "90rem", position: "relative", left: "15pc" }}
            >
              <div class="card-body">
                <p class="card-text" style={{ color: "black" }}>
                  <b>ALERT AMIGO</b> which can otherwise be called as 'Alert
                  Friend' is a web application designed on Blockchain technology
                  to fight against counterfeit goods
                </p>
                <Link to="/admin/notifications">
                  <button
                    className="logout-button"
                    style={{
                      color: "black",
                      position: "relative",
                      right: "15px"
                    }}
                  >
                    Go to dashboard
                  </button>
                </Link>
              </div>
            </div>
            <div
              class="card"
              style={{ width: "10rem", position: "relative", left: "39pc" }}
            >
              <button className="logout-button" onClick={this.logout}>
                Logout of the application
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Home;
