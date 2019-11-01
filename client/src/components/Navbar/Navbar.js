import React, { Component } from "react";
import { Link } from 'react-router-dom';
import AuthService from '../AuthService';
import API from '../../utils/API';

class Navbar extends Component {
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


    showNavigation = () => {
        if (this.Auth.loggedIn()) {
            this.getUserType(); // if user is logged in, get the user's user type to set the state

            if (this.state.usertype === "owner") {
                return (
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link className="nav-link" to="/ownerdashboard">Pet Owner Dashboard</Link>
                        </li>
                        <li className="nav-item">
                            {/* this is not using the Link component to logout or user and then refresh the application to the start */}
                            <a className="nav-link" href="/" onClick={() => this.Auth.logout()}>Logout</a>
                        </li>
                    </ul>
                );
            } else if (this.state.usertype === "vet") {
                return (
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link className="nav-link" to="/vetdashboard">Vet Dashboard</Link>
                        </li>
                        <li className="nav-item">
                            {/* this is not using the Link component to logout or user and then refresh the application to the start */}
                            <a className="nav-link" href="/" onClick={() => this.Auth.logout()}>Logout</a>
                        </li>
                    </ul>
                );
            }
        } else {
            return (
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <Link className="nav-link" to="/signup">Signup</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/login">Login</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/aboutus">About Us</Link>
                    </li>
                    <li className="nav-item">
                        {/* this is not using the Link component to logout or user and then refresh the application to the start */}
                        <Link className="nav-link" to="/calendar" >Calendar</Link>
                    </li>
                </ul>
            );
        }
    };

    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
                <div className="container">
                    <Link className="navbar-brand" to="/">Pawmigo</Link>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav mr-auto">
                        </ul>
                        {this.showNavigation()}
                    </div>
                </div>
            </nav>
        )
    }
}

export default Navbar;