import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import AuthService from './../components/AuthService';
import API from './../utils/API';

class Signup extends Component {
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
    API.signUpUser(this.state.usertype, this.state.username, this.state.email, this.state.password)
      .then(res => {
        // once the user has signed up
        // send them to the login page
        this.props.history.replace('/login');
      })
      .catch(err => alert(err));
  };

  handleChange = event => {
    const { name, value } = event.target;
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

        <h1>Signup</h1>
        <form onSubmit={this.handleFormSubmit}>
          <div className="input-group mb-3">
            <div className="input-group-prepend">
              <label className="input-group-text" htmlFor="inputGroupSelect">User Type</label>
            </div>
            <select className="custom-select" id="inputGroupSelect" name="usertype" onChange={this.handleChange}>
            <option>Choose...</option>
              <option value="owner">Pet Owner</option>
              <option value="vet">Veterinary</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="username">Username:</label>
            <input className="form-control"
              placeholder="Username goes here..."
              name="username"
              type="text"
              id="username"
              autoComplete="username"
              onChange={this.handleChange} />
          </div>
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
              autoComplete="new-password"
              onChange={this.handleChange} />
          </div>
          <button type="submit" className="btn btn-primary">Submit</button>
        </form>
        <p><Link to="/login">Go to Login</Link></p>
      </div>
    );
  }
}

export default Signup;