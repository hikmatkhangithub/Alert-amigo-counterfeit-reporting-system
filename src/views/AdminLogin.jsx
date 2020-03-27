import React, { Component } from "react";
import Home from "./AdminDashboard";
import fire from "components/config/fire";

class AdminLogin extends Component {
  constructor(props) {
    super(props);
    this.login = this.login.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.signup = this.signup.bind(this);
    this.state = {
      email: "",
      password: "",
      user: {}
    };
  }
  componentDidMount() {
    this.authListener();
  }

  authListener() {
    fire.auth().onAuthStateChanged(user => {
      console.log(user);
      if (user) {
        this.setState({ user });
        localStorage.setItem("user", user.uid);
      } else {
        this.setState({ user: null });
        localStorage.removeItem("user");
      }
    });
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  login(e) {
    e.preventDefault();
    fire
      .auth()
      .signInWithEmailAndPassword(this.state.email, this.state.password)
      .then(u => {})
      .catch(error => {
        alert("Not a valid username and password");
        console.log(error);
      });
  }

  signup(e) {
    e.preventDefault();
  }
  render() {
    return (
      <div className="container">
        {this.state.user ? (
          <Home />
        ) : (
          <div className="row  align-self-center row-design">
            <div className="col-sm-12 text-center">
              <form>
                <div className="form-group">
                  <label for="exampleInputEmail1">Email address</label>
                  <input
                    value={this.state.email}
                    onChange={this.handleChange}
                    type="email"
                    name="email"
                    className="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    placeholder="Enter email"
                  />
                  <small id="emailHelp" className="form-text text-muted">
                    We'll never share your email with anyone else.
                  </small>
                </div>
                <div className="form-group">
                  <label for="exampleInputPassword1">Password</label>
                  <input
                    value={this.state.password}
                    onChange={this.handleChange}
                    type="password"
                    name="password"
                    className="form-control"
                    id="exampleInputPassword1"
                    placeholder="Password"
                  />
                </div>
                <button
                  type="submit"
                  onClick={this.login}
                  className="btn btn-primary"
                >
                  Login
                </button>
              </form>
            </div>
          </div>
        )}
      </div>
    );
  }
}
export default AdminLogin;
