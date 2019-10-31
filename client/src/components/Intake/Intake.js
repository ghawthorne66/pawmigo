import React, { Component } from "react";
import './style.css';

export default class Intake extends React.Component {
  state = {
    firstName: "",
    lastName: "",
    address: "",
    city: "",
    state: "",
    zipCode: "",
    
  };

  change = e => {
    this.props.onChange({ [e.target.name]: e.target.value });
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  onSubmit = e => {
    e.preventDefault();
    // this.props.onSubmit(this.state);
    this.setState({
      firstName: "",
      lastName: "",
      address: "",
      city: "",
      state: "",
      zipCode: "",
    
    });
    this.props.onChange({
      firstName: "",
      lastName: "",
      address: "",
      city: "",
      email: "",
      zipCode: "",
  
    });
  };

  render() {
    return (
      <form>
        <div>Owners Information</div>
        <input
          name="firstName"
          placeholder="First name"
          value={this.state.firstName}
          onChange={e => this.change(e)}
        />
        <br />
        <input
          name="lastName"
          placeholder="Last name"
          value={this.state.lastName}
          onChange={e => this.change(e)}
        />
        <br />
        <input
          name="address"
          placeholder="Address"
          value={this.state.address}
          onChange={e => this.change(e)}
        />
        <br />
        <input
          name="city"
          placeholder="City"
          value={this.state.city}
          onChange={e => this.change(e)}
        />
        <br />
        <input
          name="state"
          placeholder="State"
          value={this.state.email}
          onChange={e => this.change(e)}
        />
        <br />
        <input
          name="zip"
          placeholder="Zip Code"
          value={this.state.email}
          onChange={e => this.change(e)}
        />
        <br />
        <div>Pet Information</div>
       
        <br />
        <button onClick={e => this.onSubmit(e)}>Submit</button>
      </form>
    );
  }
}



// export default Intake;