import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import registerServiceWorker from './registerServiceWorker';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import axios from "axios";

// Our Components
import Navbar from './components/Navbar';
import Login from './pages/Login';
import Signup from './pages/Signup';
import OwnerDashboard from './pages/OwnerDashboard';
import VetDashboard from './pages/VetDashboard';
import AboutUs from './pages/AboutUs';
import Calendar from './components/Calendar';
import Reviews from './components/Reviews';
import Intake from './components/Intake';

// Here is if we have an id_token in localStorage
if(localStorage.getItem("id_token")) {
  // then we will attach it to the headers of each request from react application via axios
  axios.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem('id_token')}`;
}

ReactDOM.render(
    <Router>
        <div>
            <Navbar />
            <Route exact path="/" component={App} />
            <Route exact path="/ownerdashboard" component={OwnerDashboard} />
            <Route exact path="/vetdashboard" component={VetDashboard} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/signup" component={Signup} />
            <Route exact path="/aboutus" component={AboutUs} />
            <Route exact path="/calendar" component={Calendar} />
            <Route exact path="/reviews" component={Reviews} />
            <Route exact path="/intake" component={Intake} />


        </div>
    </Router>
    , document.getElementById('root')
);
registerServiceWorker();
