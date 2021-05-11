//https://www.digitalocean.com/community/tutorials/react-axios-react
//https://codesandbox.io/s/react-chartjs-2-line-chart-example-5z3ss?from-embed
// For UseEffect to avoid infinite loop: https://dmitripavlutin.com/react-useeffect-infinite-loop/#:~:text=The%20infinite%20loop%20is%20fixed,callback%2C%20dependencies)%20dependencies%20argument.&text=Adding%20%5Bvalue%5D%20as%20a%20dependency,so%20solves%20the%20infinite%20loop.

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Line } from "react-chartjs-2"

export default function AxiosGraph02Func() {

    console.log("In AxiosGraph02Func")

    // global variables
    var nodeName = ""
    let metricName = ""
    let labels
    let values
    let chartData

    let dummy = "dummy"


    /* useEffect demos */
    /* DONT USE USEEFFECT OR OTHER STUFF TO CHANGE STATE - IT GOES TO INFINITE LOOP */
    /*
    //useEffect(() => setCount(count + 1), [value]); //example
    //useEffect(() => setNodeName("abc")) // works
    //useEffect(() => setNodeName(getAbc()))
    //const getAbc = () => {
    //  return "abc-gotten"
    //}
    */
    
    console.log("In getMetricsAndUpdateState: request()")

    axios.get(`http://localhost:8081/nodedetaillabelsvalues/MyApp`)
    .then(res => {

        // get the whole incoming data - which is an array of jsons
        const dataGotten = res.data;

        nodeName = dataGotten.node_name
        metricName = dataGotten.metric_name
        labels = dataGotten.labels
        values = dataGotten.values

        console.log("nodeName: " + nodeName)
        console.log("metricName: " + metricName)
        console.log("dummy: " + dummy)


        chartData = {
            labels: labels,
            datasets: [
              {
                label: {metricName} + " : for " + {nodeName},
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
                data: {values}
              }
            ]
        };

        console.log("Chart Data:")
        console.log(chartData)

    })

    console.log("outside nodeName: " + nodeName)
    console.log("outside metricName: " + metricName)
    console.log("outside dummy: " + dummy)
    //return "OK This is fine 2 for Node: " + nodeName

    /*
    return (
      <div>
        <h2>Detailed Metric: {metricName} - for {nodeName} </h2>
        <Line data={chartData} />
      </div>
    )
    */
  
}
