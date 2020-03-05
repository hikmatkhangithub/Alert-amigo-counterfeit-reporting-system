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
// import BasicExample from "./Abc";
import AdminLayout from "layouts/Admin.jsx";
import AdminDashboard from "views/AdminDashboard";

//import App from "./components/App";
import Blockchain from "./components/Blockchain";

import Notfound from "./components/notfound";
import * as serviceWorker from "./serviceWorker";

const Routing = (
  <BrowserRouter>
    <Switch>
      <Route path="/admin" render={props => <AdminLayout {...props} />} />
      {/* <Redirect from="/" to="/admin/dashboard" /> */}
      {/* <BasicExample/> */}
      <Link to="/admin/notifications">
        <div class="container">
          <div class="container22">
            <h2 class="front">Entrance to Alert Amigo!</h2>
            <button type="button" class="demo-button">
              {" "}
              DEMO
            </button>
          </div>
        </div>
      </Link>
      {/*  <Route exact path="/admin/App" component={App} /> */}
      <Route path="/admin/Blockchain" component={Blockchain} />

      <Route path="/admin/AdminDashboard" component={AdminDashboard} />
      <Route component={Notfound} />
    </Switch>
  </BrowserRouter>
);

ReactDOM.render(Routing, document.getElementById("root"));

serviceWorker.unregister();
