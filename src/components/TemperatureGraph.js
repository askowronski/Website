
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
            this.setState({
                isLoaded: true,
                items:  JSON.parse(JSON.stringify(data)).temperatures

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
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="date"  label="Date"/>
                    <YAxis dataKey="temperature" label={xAxisLabel()}/>
                    <Tooltip />
                    <Legend />
                    <Line type="monotone" dataKey="temperature" stroke="#8884d8" />
                </LineChart> : <span></span>}

            </div>
            ;
    }
}

const xAxisLabel = ( ) => {
    return <div className="xAxisLabel">
        <text style={{color:'blue'}}>Temperature</text>

    </div>
};

export default TemperatureGraph;