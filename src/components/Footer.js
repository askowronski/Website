import { SocialIcon } from 'react-social-icons';
var React = require('react');
import {Component, PropTypes} from 'react';
import "../App.css";
import $ from "jquery";

export class Footer extends React.Component {
    constructor(props) {
        super(props);
    }




    render() {
        return (


            <div className="footer">
                <div className="iconContainer">
            <SocialIcon url="https://www.instagram.com/skadoobles/"/>
                </div>
                <div className="iconContainer">
                <SocialIcon url="https://soundcloud.com/themadskatter"/>
                </div>
            </div>

        );
    }

}

export default Footer;
