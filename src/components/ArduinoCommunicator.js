import SerialPort from "serialport";
var React = require('react');
import {Component, PropTypes} from 'react';
import "../App.css";
import $ from "jquery";


let port = new SerialPort('/dev/tty-usbserial1', {autoOpen: false});
port.open(function (err) {
    if (err) {
        return console.log('Error opening port: ', err.message);
    }

    // Because there's no callback to write, write errors will be emitted on the port:
    port.write('main screen turn on');
});

// The open event is always emitted
port.on('open', function() {
    port.write("mode/13/o");
    console.log("mode opened")
});



export class ArduinoCommunicator extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            lightOn:false

        };

    }



    writeToSerial() {
        let port = new SerialPort('/dev/tty-usbserial1', {autoOpen: false});

        if (this.state.lightOn === false ){
            port.write("/digital/13/1");
        } else {
            port.write("/digital/13/0");
        }

        let newValue = !this.state.lightOn;

        this.setState({
            lightOn:newValue
        });

    }



    render() {
        return (


            <div className="footer">

                <buttom onclick={this.writeToSerial}> </buttom>
            </div>

        );
    }

}

export default ArduinoCommunicator;