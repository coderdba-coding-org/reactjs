//Based on ReactChart01/AxiosGraph02
// - which is based on https://www.digitalocean.com/community/tutorials/react-axios-react
// Also - how to refresh a chart with a button: https://www.syncfusion.com/forums/160500/refresh-chart
//      - binding 'this' to be available inside functions - https://www.w3schools.com/react/react_events.asp

import React from 'react';
import axios from 'axios';
import { Line } from "react-chartjs-2"

export default class Button01 extends React.Component {
  
  state = {
    nodeName:   "",
    metricName: "",
    labels: [],
    values: [],
    data: {},
  }

  // This and the 'bind' in it are necessary for 'this' to be available in functions
  constructor(props) {
    super(props)
    this.refreshData = this.refreshData.bind(this)
  }

  componentDidMount() {
    this.refreshData()
  }
  
  refreshData() {
    axios.get(`http://localhost:8081/nodedetaillabelsvalues/MyApp`)
    .then(res => {

    // get the whole incoming data - which is an array of jsons
    const dataGotten = res.data;

    // set the state that will hold the whole data
    this.setState({nodeName: dataGotten.node_name})
    this.setState({metricName: dataGotten.metric_name})
    this.setState({labels: dataGotten.labels})
    this.setState({values: dataGotten.values})

    console.log("state nodeName:")
    console.log(this.state.nodeName)
    console.log("state metricName:")
    console.log(this.state.metricName)
    console.log("state labels:")
    console.log(this.state.labels)
    console.log("state values:")
    console.log(this.state.values)

    const dataConst = {
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
    this.setState({data: dataConst})
    });
  }

  render() {
     return (
      <div>
        <h2>Detailed Metric: {this.state.metricName} - for {this.state.nodeName} </h2>
        <Line data={this.state.data} />
        <button onClick={this.refreshData}> Refresh Graph </button>
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