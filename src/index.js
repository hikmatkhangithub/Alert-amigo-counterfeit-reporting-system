import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/css/animate.min.css";
import "./assets/sass/light-bootstrap-dashboard-react.scss?v=1.3.0";
import "./assets/css/demo.css";
import "./assets/css/pe-icon-7-stroke.css";
import "./assets/css/CustomAdminStyle.css";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import AdminLayout from "layouts/Admin.jsx";
import Notfound from "./components/Notfound";
import * as serviceWorker from "./serviceWorker";


const Routing = (       // Routing
  <BrowserRouter>
    <Switch>
      <Route path="/admin" render={(props) => <AdminLayout {...props} />} />
      <Redirect from="/" to="/admin/notifications" />
      <Route component={Notfound} />
    </Switch>
  </BrowserRouter>
);
ReactDOM.render(Routing, document.getElementById("root"));

serviceWorker.unregister();
