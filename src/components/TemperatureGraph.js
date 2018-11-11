
import {scaleLinear} from "d3-scale";
import {select} from "d3-selection";
import {max} from "d3-array";
import {
    CartesianGrid, Legend, Line, Tooltip, XAxis, LineChart,
    YAxis
} from "recharts";
var React = require('react');
import {Component, PropTypes} from 'react';
import "../App.css";
import $ from "jquery";
import * as d3 from "d3";
import ReactEcharts from 'echarts-for-react';  // or var ReactEcharts = require('echarts-for-react');
import echarts from 'echarts';
import moment from 'moment';


echarts.registerTheme('my_theme', {
    backgroundColor: '#f4cccc'
});




export class TemperatureGraph extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            items: [{x:1,y:''}]

        };

    }

    makeOption() {

        return {title:{text:"Temperature in My Room"},xAxis:[{type:'time',data:this.state.items}],yAxis:[{type:'value',data:this.state.items}]};
    }


    componentDidMount() {
        $.get("http://localhost:8000/getTemperature", function() {
            console.log("got the data");


        }).done(function(data) {

            var temperatures = {
                temperatures:[]

            };

            var parsedData = JSON.parse(JSON.stringify(data)).temperatures;
            for(var i in parsedData){
                 temperatures.temperatures.push({
                     "date":parsedData[i].date,
                     "temperature":parseInt(parsedData[i].temperature)
                 })
            }
            this.setState({
                isLoaded: true,
                items:  temperatures.temperatures

            })

        }.bind(this)).fail(function(err) {
            console.log(err);
        });
    };

    parseData(data) {
        var string = "[";
        data.temperatures.forEach(function(val, index) {
            string += "{"+val.date+","+val.temperature+"},"

            }


        );
        string.substr(0,string.length-1);
        console.log(string);
        var object= {
            id:'dope',
            name:'temperature',
            color:'blue',
            points:string

        };

        return string;
    }


    render() {
        // render frame div for chart component
        return <div>
            {this.state.isLoaded ?
                <LineChart width={1400} height={600} data={this.state.items}
                           margin={{ top: 5, right: 10, left: 50, bottom: 5 }}
                           style={{backgroundColor:'white',opacity:'.5'}}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="date"  label={yAxisLabel()} />
                    <YAxis dataKey="temperature" label={xAxisLabel()} domain={['auto','auto']}/>
                    {/*<Tooltip />*/}
                    <Legend />
                    <Line strokeWidth="2" type="monotone" dataKey="temperature" stroke="#000080" fill='#4286f4' className="tempLine"/>
                </LineChart> : <span></span>}

            </div>
            ;
    }
}

const xAxisLabel = ( ) => {
    return <div className="xAxisLabel">
        <text style={{color:'blue'}}>Date</text>

    </div>
};

const yAxisLabel = ( ) => {
    return <div className="yAxisLabel">
        <text style={{color:'blue'}}>Temperature</text>

    </div>
};

export default TemperatureGraph;