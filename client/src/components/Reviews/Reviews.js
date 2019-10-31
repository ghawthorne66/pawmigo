import React, { Component } from "react";
import { Link } from 'react-router-dom';
import AuthService from '../AuthService';
import API from '../../utils/API';



class Reviews extends Component {
    
    componentDidMount() {
        const head = document.querySelector('head');
        const script = document.createElement('script');
        script.setAttribute('src', 'https://birdeye.com/embed/v4/157246996061408/3/1234567945183"')
        head.appendChild(script);
    }

    render() {
        return (
            <div>
                Hello World!
                <script type="text/javascript" src="https://birdeye.com/embed/v4/157246996061408/8/1234567995183"></script><div id="bf-revz-widget-1234567995183" ></div>


            </div>
        );
    }
}



export default Reviews;