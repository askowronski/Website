const React = require('react');
import {Component, PropTypes} from 'react';
import ArduinoCommunicator, {TemperatureGraph} from "./TemperatureGraph";
import "../App.css";
import $ from "jquery";


export class PictureCard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            pictureLocation: props.imageLocation,
            xLocation: props.xLocation,
            yLocation: props.yLocation,
            xSize: props.xSize,
            ySize: props.ySize,
            showPicture:false
        }
    }


    componentDidMount() {

        this.setState({
            showPicture:true
        });
    }


    render() {
        return (


            <div className="pictureCardContainer">


                {this.state.showPicture ? <img src="/src/resources/andrew_skowronski.jpg" className="aboutMePicture"/>  : <span></span>

                }

                <TemperatureGraph size={[500,500]}/>



            </div>

        );
    }

}

export default PictureCard;