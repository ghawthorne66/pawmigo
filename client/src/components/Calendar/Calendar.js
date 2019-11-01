import React, { Component } from "react";
import { Link } from 'react-router-dom';
import AuthService from '../AuthService';
import API from '../../utils/API';
import './style.css';

class Calendar extends Component {
    
    componentDidMount() {
        // const head = document.querySelector('head');
        // const script = document.createElement('script');
        // script.setAttribute('src', 'https://assets.calendly.com/assets/external/widget.js')
        // head.appendChild(script);
    }

    render() {
        return (
            <div>
             
        
<div className="calendly-inline-widget" data-url="https://calendly.com/greghawthorne/60min" ></div>

            </div>
        );
    }
}



export default Calendar;