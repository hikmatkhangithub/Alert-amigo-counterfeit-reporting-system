<<<<<<< HEAD
import React from "react";
// import Col from 'react-bootstrap/Col'
// import Row from 'react-bootstrap/Row'
// import Container from 'react-bootstrap/Container'
import { Table, Grid, Row, Col } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter, Route, Switch, Redirect, Link} from "react-router-dom";
import AdminLayout from "layouts/Admin.jsx";
import { fire, facebookProvider } from 'components/Config/Fire';
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
          <div className="wrapper" style={{backgroundColor: '#8a2be24d'}}>
          <div style={{textAlign: "center", verticalAlign: "middle"}}>
          <div class="navbar">
            <p className="paracolor" style={{backgroundColor: 'gray'}}> This website does not belong to a real company. It is a Planspiel Web Engineering Project</p>
          </div>
                <div style={{padding:'6em'}}>
                  <h1 class="welcome">
                      Alert Amigo
                  </h1>
                  <hr class="new2"/>
                  <Route path="/admin" render={props => <AdminLayout {...props}/>}/>
                  <div class="card" style={{width: '90rem', position:'relative', left:'15pc'}}>
                      <div class="card-body">

                          <p class="card-text" style={{color: 'black'}}><b>ALERT AMIGO</b> which can otherwise be called as 'Alert Friend' is a web application designed on Blockchain technology to fight against counterfeit goods</p>
                          <Link to="/admin/notifications">
                                <button className="logout-button" style={{color: 'black', position:'relative', right:'15px'}} >Go to dashboard</button>
                            </Link>
                        </div>
                      </div>
                      <div class="card" style={{width: '10rem', position:'relative', left:'39pc'}}>

                                    <button className="logout-button" onClick={this.logout}>Logout of the application</button>


                          </div>


              </div>
          </div>


          </div>





        )
    }
}
export default Home
=======
import React, { Component } from "react";
import SignInForm from "components/SignInForm/SignInForm.jsx";
import SignUpForm from "components/SignUpForm/SignUpForm.jsx";
import './Typography.css';
import { HashRouter as Router, Route, Link, NavLink } from 'react-router-dom';
class Home extends Component {

  render() {
    return(
      <Router basename="/react-auth-ui/">
        {/* <div class="container"> */}
          <h1 class="front"> Welcome to <h1 class="amigo">Alert Amigo</h1></h1>
        
        <div class="sign-box">
{/* <h2> Welcome to Alert Amigo</h2> */}
{/* <h4> You are just one step away from counterfeiting</h4> */}
          <div class="App__Form">
            {/* <div className="PageSwitcher">
                <NavLink to="/sign-in" activeClassName="PageSwitcher__Item--Active" className="PageSwitcher__Item">Sign In</NavLink>
                <NavLink exact to="/" activeClassName="PageSwitcher__Item--Active" className="PageSwitcher__Item">Sign Up</NavLink>
              </div> */}

              

              <Route exact path="/" component={SignUpForm}>
              </Route>
              <Route path="/sign-in" component={SignInForm}>
              </Route>
              {/* Sign in or Sign up */}
              <div className="FormTitle">
                  <NavLink to="/sign-in" activeClassName="FormTitle__Link--Active" className="FormTitle__Link">Sign In</NavLink> or <NavLink exact to="/" activeClassName="FormTitle__Link--Active" className="FormTitle__Link">Sign Up</NavLink>
              </div>
          </div>
          </div>
        {/* </div> */}
      </Router>
    );
  }
}

export default Home;
>>>>>>> f2024770a70793b5f5ec64ded646958124ec9164
