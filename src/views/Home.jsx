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
