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
import ChartistGraph from "react-chartist";
import { Grid, Row, Col } from "react-bootstrap";

import { Card } from "components/Card/Card.jsx";
import { StatsCard } from "components/StatsCard/StatsCard.jsx";
import { Tasks } from "components/Tasks/Tasks.jsx";
import {
  // dataPie,
  // legendPie,
  // dataSales,
  // optionsSales,
  // responsiveSales,
  // legendSales,
  // dataBar,
  // optionsBar,
  responsiveBar,
  legendBar
} from "variables/Variables.jsx";
import SignInForm from "components/SignInForm/SignInForm.jsx";
import SignUpForm from "components/SignUpForm/SignUpForm.jsx";

import { HashRouter as Router, Route, Link, NavLink } from 'react-router-dom';


class Dashboard extends Component {
  // createLegend(json) {
  //   var legend = [];
  //   for (var i = 0; i < json["names"].length; i++) {
  //     var type = "fa fa-circle text-" + json["types"][i];
  //     legend.push(<i className={type} key={i} />);
  //     legend.push(" ");
  //     legend.push(json["names"][i]);
  //   }
  //   return legend;
  // }
  render() {
    return(
      <Router basename="/react-auth-ui/">
        <div className="App">

          <div className="App__Form">
            {/* <div className="PageSwitcher">
                <NavLink to="/sign-in" activeClassName="PageSwitcher__Item--Active" className="PageSwitcher__Item">Sign In</NavLink>
                <NavLink exact to="/" activeClassName="PageSwitcher__Item--Active" className="PageSwitcher__Item">Sign Up</NavLink>
              </div> */}

              <div className="FormTitle">
                  <NavLink to="/sign-in" activeClassName="FormTitle__Link--Active" className="FormTitle__Link">Sign In</NavLink> or <NavLink exact to="/" activeClassName="FormTitle__Link--Active" className="FormTitle__Link">Sign Up</NavLink>
              </div>

              <Route exact path="/" component={SignUpForm}>
              </Route>
              <Route path="/sign-in" component={SignInForm}>
              </Route>
          </div>
        
        </div>
      </Router>
    );

    // (
    //   <div className="content">
    //     <Grid fluid>
    //       <Row>
    //         <Col lg={3} sm={6}>
    //           <StatsCard
    //             bigIcon={<i className="pe-7s-server text-warning" />}
    //             statsText="Capacity"
    //             statsValue="105GB"
    //             statsIcon={<i className="fa fa-refresh" />}
    //             statsIconText="Updated now"
    //           />
    //         </Col>
    //         <Col lg={3} sm={6}>
    //
    //         </Col>
    //         <Col lg={3} sm={6}>
    //
    //         </Col>
    //         <Col lg={3} sm={6}>
    //
    //         </Col>
    //       </Row>
    //       <Row>
    //         <Col md={8}>
    //
    //         </Col>
    //         <Col md={4}>
    //
    //         </Col>
    //       </Row>
    //
    //       <Row>
    //         <Col md={6}>
    //
    //         </Col>
    //
    //         <Col md={6}>
    //
    //         </Col>
    //       </Row>
    //     </Grid>
    //   </div>
    // );
  }
}

export default Dashboard;
