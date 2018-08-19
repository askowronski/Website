var React = require('react');
import {Component, PropTypes} from 'react';
import AboutMeText from "./components/AboutMeText";
import PictureCard from "./components/PictureCard";
import Footer from "./components/Footer";
import {Header} from "./components/Header";
import "./App.css";
import $ from "jquery";

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedOption:""

        };
        this.updateSelectedOption = this.updateSelectedOption.bind(this);

    }

    checkUpdate(nextState) {
        if (nextState === 'About'){
            $(document.body).removeClass('fullPageImage');

        } else {
            $(document.body).addClass('fullPageImageNight');
        }
    }

    componentDidMount() {
        this.setState({
            selectedOption:'About'
        });

    }

    componentDidUpdate(prevProps, prevState) {
        if (prevProps.selectedOption !== this.props.selectedOption) {
            if (prevState.selectedOption === 'About'){
                $(document.body).removeClass('fullPageImage');

            } else {
                $(document.body).addClass('fullPageImageNight');
            }
        }
    }

    returndarkTintContainer() {
        return                 <div id="" className=""></div>;

    }

    returnPage() {
        if (this.state.selectedOption === "About") {
                return <div className="aboutMeText">
                    <div className="aboutMeText">
                        <AboutMeText/>
                    </div>
                    <div className="aboutMeContainerRight">
                        <PictureCard imageLocation="../resources/andrew_skowronski.jpg"/>
                    </div>

                </div>;
        } else {
            return <div> <a href="/src/resources/brownianmotianofatrappedmicrosphereion.pdf">
                RESEARCH
            </a></div>;
        }

    }

    updateSelectedOption(selectedOption) {

        this.setState({
           selectedOption:selectedOption
        });
    }




    render(){
        return(

            <div  className="">
                {this.returndarkTintContainer()}
                <div className="floatLeft leftMenu">
            <Header selectedOption={this.state.selectedOption} updateSelectedOption={this.updateSelectedOption}/>

                </div>
                 <div className="App" style={{display:'inline-block'}}>
                     <div className="aboutMeContainer" style={{width:'50%', backgroundColor:"#FFF", height:100, align:'right'}}>
                         {this.returnPage()}
                     </div>
                 </div>

                <div>
                    <Footer>

                    </Footer>

                </div>
            </div>
        );
    }
}

export default App;
