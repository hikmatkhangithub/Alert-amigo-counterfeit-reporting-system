import React from "react";
import ReactDOM from "react-dom";
import Bootstrap from "react-bootstrap";

import { BrowserRouter, Route, Switch, Redirect, Link } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/css/animate.min.css";
import "./assets/sass/light-bootstrap-dashboard-react.scss?v=1.3.0";
import "./assets/css/demo.css";
import "./assets/css/pe-icon-7-stroke.css";
import "./Abc.css";

import BasicExample from "views/BasicExample";
import AdminLayout from "layouts/Admin.jsx";

import App from "./components/App";
import Blockchain from "./components/Blockchain";
import MongoData from "./components/MongoData";
import Notfound from "./components/notfound";
import * as serviceWorker from "./serviceWorker";
import Dashboard from "views/Dashboard.jsx";
import SignInForm from "components/SignInForm/SignInForm.jsx";

const Routing = (
  <BrowserRouter>
    <Switch>
      <Route path="/admin" render={props => <AdminLayout {...props} />} />
      {/* <Redirect from="/" to="/admin/dashboard" /> */}
      {<BasicExample />}
      {/* <Link to="/admin/notifications">
          <div className="container">
            <div className="container22">
              <h2 className="front">Entrance to Alert Amigo!</h2>
              <button type="button" className="demo-button">
                {" "}
                DEMO
              </button>
            </div>
          </div>
        </Link> */}
      {/*  <Route exact path="/admin/App" component={App} /> */}
      <Route path="/admin/Blockchain" component={Blockchain} />

      <Route component={Notfound} />
    </Switch>
  </BrowserRouter>
);

ReactDOM.render(Routing, document.getElementById("root"));

serviceWorker.unregister();
