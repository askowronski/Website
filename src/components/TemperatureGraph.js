
import {scaleLinear} from "d3-scale";
import {select} from "d3-selection";
import {max} from "d3-array";
var React = require('react');
import {Component, PropTypes} from 'react';
import "../App.css";
import $ from "jquery";
import * as d3 from "d3";






export class TemperatureGraph extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            items: []

        };

    }


    componentDidMount() {

        $.get("http://localhost:8000/getTemperature", function() {
            console.log("got the data");

        }).done(function(data) {
            this.setState({
                isLoaded:true,
                items:data


            })

        }.bind(this)).fail(function(err) {
            console.log(err);
        })

    }



    render() {
        return (


            <div>
            </div>

        );
    }

}

export default TemperatureGraph;