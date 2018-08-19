/**
 * Created by askowronski on 8/12/18.
 */
var React = require('react');
import {Component, PropTypes} from 'react';
import "../App.css";
import $ from "jquery";


export class AboutMeText extends React.Component {
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


            <div className="aboutMeTextContainer">

                <div style={{marginTop:'10%'}}></div>
                <text className="nameText">Andrew Skowronski</text>
                <div className="detailsContainer">
                <br/>
                <p className="robotoFont">Software Developer because software develops. I am the devleoping software motherfucker my dudes. Here we go constructoron for constructor
                another sentence. Software developer because i am. Software Developer because software develops. I am the devleoping software motherfucker my dudes. Here we go constructoron for constructor
                    another sentence. Software developer because i am.Software Developer because software develops. I am the devleoping software motherfucker my dudes. Here we go constructoron for constructor
                    another sentence. Software developer because i am.Software Developer because software develops. I am the devleoping software motherfucker my dudes. Here we go constructoron for constructor
                    another sentence. Software developer because i am.Software Developer because software develops. I am the devleoping software motherfucker my dudes. Here we go constructoron for constructor
                    another sentence. Software developer because i am.Software Developer because software develops. I am the devleoping software motherfucker my dudes. Here we go constructoron for constructor
                    another sentence. Software developer because i am.Software Developer because software develops. I am the devleoping software motherfucker my dudes. Here we go constructoron for constructor
                    another sentence. Software developer because i am.
                </p>
                </div>

            </div>

        );
    }

}

export default AboutMeText;