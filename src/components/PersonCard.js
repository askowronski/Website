import { SocialIcon } from 'react-social-icons';
var React = require('react');
import {Component, PropTypes} from 'react';
import "../App.css";
import $ from "jquery";

export class PersonCard extends React.Component {
    constructor(props) {
        super(props);
    }




    render() {
        return (


            <div className="footer">
                <SocialIcon url="https://www.instagram.com/skadoobles/"/>
                <SocialIcon url="https://soundcloud.com/themadskatter"/>




            </div>

        );
    }

}

export default PersonCard;

