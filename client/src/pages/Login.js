import React, { Component } from 'react';
import AuthService from './../components/AuthService';
import { Link, Redirect } from 'react-router-dom';
import API from '../utils/API';

class Login extends Component {
  constructor() {
    super();
    this.Auth = new AuthService();
  }

  state = {
    usertype: "",
  };


  getUserType = () => {
    let userID = this.Auth.getProfile().id;
    API.getUser(userID).then(res => {
      this.setState({
        usertype: res.data.usertype
      })
    });
  }

  handleFormSubmit = event => {
    event.preventDefault();

    this.Auth.login(this.state.email, this.state.password)
      .then(res => {
        // once user is logged in
        // take them to their dashboard page
        let usertype = res.data.user.usertype;

        if (usertype === "owner") {
          this.props.history.replace(`/ownerdashboard`);
        } else {
          this.props.history.replace(`/vetdashboard`);
        }

        window.location.reload(); // reload the page, otherwise navbar will not show links like logout

      })
      .catch(err => {
        alert(err.response.data.message)
      });
  };

  handleChange = event => {
    const { name, value } = event.target;
    console.log(event.target)
    this.setState({
      [name]: value
    });
  };

  render() {
    // go to corresponding user dashboard page if user is logged in
    if (this.Auth.loggedIn()) {

      this.getUserType();

      if (this.state.usertype === "owner") {
        return <Redirect to="/ownerdashboard" /> 
      } else if (this.state.usertype === "vet") {
        return <Redirect to="/vetdashboard" />
      }

    }

    return (
      <div className="container">
        <h1>Login</h1>
        <form onSubmit={this.handleFormSubmit}>
          <div className="form-group">
            <label htmlFor="email">Email address:</label>
            <input className="form-control"
              placeholder="Email goes here..."
              name="email"
              type="email"
              id="email"
              autoComplete="email"
              onChange={this.handleChange} />
          </div>
          <div className="form-group">
            <label htmlFor="pwd">Password:</label>
            <input className="form-control"
              placeholder="Password goes here..."
              name="password"
              type="password"
              id="pwd"
              autoComplete="current-password"
              onChange={this.handleChange} />
          </div>
          <button type="submit" className="btn btn-primary">Submit</button>
        </form>
        <p><Link to="/signup">Go to Signup</Link></p>
      </div>

    );
  }
}

export default Login;