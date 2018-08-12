var React = require('react');
import {Component, PropTypes} from 'react';
import withStyles from "@material-ui/core/es/styles/withStyles";
import Icon from "@material-ui/core/es/Icon/Icon";
import {hot} from "react-hot-loader";
import {MDCTopAppBar} from '@material/top-app-bar/index';
import "@material/top-app-bar/mdc-top-app-bar.scss";
import Button from '@material-ui/core/Button';
import SideNav, {Nav, NavIcon, NavText} from 'react-sidenav';
import SvgIcon from 'react-icons-kit';
import GuitarIcon from '../resources/electric-guitar.svg'
import { ic_laptop_mac } from 'react-icons-kit/md/ic_laptop_mac';
import { ic_music_note } from 'react-icons-kit/md/ic_music_note';
import { ic_face } from 'react-icons-kit/md/ic_face';
import "../App.css";
import $ from "jquery";



export class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedOption:props.selectedOption,
            showText:[false,false,false]
        };
        this.changeSelectedOption = this.changeSelectedOption.bind(this);
        this.showText = this.showText.bind(this);
        this.hideText = this.hideText.bind(this);
        this.updateSelectedOption = props.updateSelectedOption

    }

    changeSelectedOption(option,parent){
          this.setState({
              selectedOption: option
          });
          this.updateSelectedOption(option);
    };

    componentDidMount() {
        this.setState({
           selectedOption: 'About'
        });
    }

    renderPageComponents() {
        $('#darkTintContainer').removeClass('darkTintAnimation');
        if (this.state.selectedOption === 'About') {
            $(document.body).removeClass();
            $('.aboutText').show();
            $('.leftSideNavSelected').removeClass();
            $('#aboutIcon').addClass("leftSideNavSelected");
            $('.devText').hide();
            $('.musicText').hide();


            $(document.body).addClass('fullPageImage');

        } else if (this.state.selectedOption === 'Development') {
            $('.aboutText').hide();
            $('.devText').show();
            $('.musicText').hide();

            $('.leftSideNavSelected').removeClass();
            $('#devIcon').addClass("leftSideNavSelected");
            $(document.body).removeClass();

            $(document.body).addClass('fullPageImageNight');

        } else {
            $('.aboutText').hide();
            $('.devText').hide();
            $('.musicText').show();
            $(document.body).removeClass();
            $('.leftSideNavSelected').removeClass();
            $('#musicIcon').addClass("leftSideNavSelected");

            $(document.body).addClass('fullPageImageNight2');
        }
        $('#darkTintContainer').addClass('darkTintAnimation');

        if (this.state.selectedOption === 'About') {

            return <text color="#000000" fontStyle={20}>swag</text>;
        }
    };

    showText(int) {
        var textVals = [false,false,false];
        textVals[int] = true;
      this.setState({
          showText:textVals
      });

    };

    hideText() {
        var textVals = [false,false,false];
        this.setState({
            showText:textVals
        });
    };




    render() {
        return (


            <div>
                <div><MySideNav changeSelectedItem = {this.changeSelectedOption} showText={this.showText} hideText={this.hideText} showTextVals={this.state.showText}/>
                </div>
                {
                    this.renderPageComponents()
                }

            </div>

        );
    }

}


const MySideNav = (props) => (
    <div style={{color: '#FFF', width: 200, paddingTop:'2%', paddingBottom:'2%',margin:0}}>
        <SideNav highlightColor='#FFF'
                 defaultSelected=''  onItemSelection={(id, parent) => props.changeSelectedItem(id,parent)}>

            <Nav id='About' className="leftSideNav">
                <NavIcon className="leftSideNav"><SvgIcon onMouseEnter={() => props.showText(0)} onMouseLeave={props.hideText}
                                                          classes="leftSideNavNotSelected" id="aboutIcon" size={45} icon={ic_face}/></NavIcon>

                <NavText className="leftSideNav" >


                    <div className="leftSideNavText">

                        {props.showTextVals[0] ? 'About' : ''}
                    </div>
                </NavText>
            </Nav>

            <Nav id='Development' className="leftSideNav">
                <NavIcon className="leftSideNav"><SvgIcon onMouseEnter={() => props.showText(1)} onMouseLeave={props.hideText}
                    classes="leftSideNavNotSelected" id="devIcon" size={45} icon={ic_laptop_mac}/></NavIcon>
                <NavText className="leftSideNav" >
                    <div className="leftSideNavText">

                        {props.showTextVals[1] ? 'Dev' : ''}
                    </div>
                </NavText>
            </Nav>
            <Nav id='Music' className="leftSideNav">
                <NavIcon className="leftSideNav"><SvgIcon onMouseEnter={() => props.showText(2)} onMouseLeave={props.hideText}
                    classes="leftSideNavNotSelected" id="musicIcon" size={45} icon={ic_music_note}/></NavIcon>
                <NavText className="leftSideNav" >
                    <div className="leftSideNavText">

                        {props.showTextVals[2] ? 'Music' : ''}
                    </div>
                </NavText>
            </Nav>


        </SideNav>
    </div>
);

export default Header;
