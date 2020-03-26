
import React from "react";
import ReactDOM from "react-dom";
// import Bootstrap from "react-bootstrap";
import { BrowserRouter, Route, Switch, Redirect, Link } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/css/animate.min.css";
import "./assets/sass/light-bootstrap-dashboard-react.scss?v=1.3.0";
import "./assets/css/demo.css";
import "./assets/css/pe-icon-7-stroke.css";
import "./Abc.css";
import BasicExample from "views/BasicExample.jsx";
import AdminLayout from "layouts/Admin.jsx";


import App from './components/App';
import Blockchain from './components/Blockchain';
import MongoData from './components/MongoData';
import Notfound from './components/notfound';
import * as serviceWorker from './serviceWorker';
import Dashboard from "views/Dashboard.jsx";
import SignInForm from "components/SignInForm/SignInForm.jsx";
const Routing = (
<BrowserRouter>

{/* <Button>Link</Button> */}
  <Switch>
    <Route path="/admin" render={props => <AdminLayout {...props} />} />
    {/* <Redirect from="/" to="/admin/dashboard" /> */}
    <BasicExample/>
    {/* <SignInForm /> */}
   
     <Route exact path="/admin/App" component={App} />
     <Route path="/admin/Blockchain" component={Blockchain} />
     <Route path="/admin/MongoData" component={MongoData} />

     <Route component={Notfound} />
  </Switch>
</BrowserRouter>

)


ReactDOM.render(Routing, document.getElementById("root")
);

serviceWorker.unregister();
