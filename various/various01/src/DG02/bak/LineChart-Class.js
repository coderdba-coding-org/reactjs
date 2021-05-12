//https://www.codegrepper.com/code-examples/javascript/frameworks/react/react+chart+js+2
//https://www.digitalocean.com/community/tutorials/react-axios-react
//Based on AxiosGraph02-v00 --> the 'class' component type

import React from 'react';
import axios from 'axios';
import { Line } from "react-chartjs-2"

export default class LineChartClass extends React.Component {
  
  state = {
    nodeName:   "",
    metricName: "",
    labels: [],
    values: []
  }

  componentDidMount() {

    console.log("Prop nodeName: ")
    console.log(this.props.nodeName)

    const url = "http://localhost:8081/nodedetaillabelsvalues/" + this.props.nodeName
    console.log("LineChartClass - componentDidMount() - URL is: " + url )
    //const url = "http://localhost:8081/nodedetaillabelsvalues/MyApp"
    //axios.get(`http://localhost:8081/nodedetaillabelsvalues/MyApp`)
    axios.get(url); // not sure if this additional one is required
    axios.get(url)
      .then(res => {

        // get the whole incoming data - which is an array of jsons
        const dataGotten = res.data;

        // set the state that will hold the whole data
        this.setState({nodeName: dataGotten.node_name})
        this.setState({metricName: dataGotten.metric_name})
        this.setState({labels: dataGotten.labels})
        this.setState({values: dataGotten.values})

        console.log("State nodeName: ")
        console.log(this.state.nodeName)
        /*
        console.log("state nodeName:")
        console.log(this.state.nodeName)
        console.log("state metricName:")
        console.log(this.state.metricName)
        console.log("state labels:")
        console.log(this.state.labels)
        console.log("state values:")
        console.log(this.state.values)
        */
       
      });
  }

  render() {
      
      const data = {
        labels: this.state.labels,
        datasets: [
          {
            label: this.state.metricName + " : for " + this.state.nodeName,
            fill: false,
            lineTension: 0.1,
            backgroundColor: 'rgba(75,192,192,0.4)',
            borderColor: 'rgba(75,192,192,1)',
            borderCapStyle: 'butt',
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: 'miter',
            pointBorderColor: 'rgba(75,192,192,1)',
            pointBackgroundColor: '#fff',
            pointBorderWidth: 1,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: 'rgba(75,192,192,1)',
            pointHoverBorderColor: 'rgba(220,220,220,1)',
            pointHoverBorderWidth: 2,
            pointRadius: 1,
            pointHitRadius: 10,
            data: this.state.values
          }
        ]
      };

     return (
      <div>
        <h2>Detailed Metric: {this.state.metricName} - for {this.state.nodeName} </h2>
        <Line data={data} />
      </div>
    )

    /*
      // data for reference
      const data0 = {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets: [
          {
            label: 'My First dataset',
            fill: false,
            lineTension: 0.1,
            backgroundColor: 'rgba(75,192,192,0.4)',
            borderColor: 'rgba(75,192,192,1)',
            borderCapStyle: 'butt',
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: 'miter',
            pointBorderColor: 'rgba(75,192,192,1)',
            pointBackgroundColor: '#fff',
            pointBorderWidth: 1,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: 'rgba(75,192,192,1)',
            pointHoverBorderColor: 'rgba(220,220,220,1)',
            pointHoverBorderWidth: 2,
            pointRadius: 1,
            pointHitRadius: 10,
            data: [65, 59, 80, 81, 56, 55, 40]
          }
        ]
      };

    */

  }

}


