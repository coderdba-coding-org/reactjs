//https://www.digitalocean.com/community/tutorials/react-axios-react
import React, { useState } from 'react';
import axios from 'axios';
import { Line } from "react-chartjs-2"

export default function AxiosGraph02Func() {

  console.log("In AxiosGraph02Func")

  // state to store the network json with baseline and actual values as well
  const [nodeName, setNodeName] = useState()
  const [metricName, setMetricName] = useState()
  const [labels, setLabels] = useState()
  const [values, setValues] = useState()

  //const request = () =>  {
    console.log("In AxiosGraph02Func: request()")

    axios.get(`http://localhost:8081/nodedetaillabelsvalues/MyApp`)
      .then(res => {
        // get the whole incoming data - which is an array of jsons
        const dataGotten = res.data;

        // set the state that will hold the whole data
        setNodeName(dataGotten.node_name)
        setMetricName(dataGotten.metric_name)
        setLabels(dataGotten.labels)
        setValues(dataGotten.values)

        console.log("state nodeName:")
        console.log(nodeName)
        console.log("state metricName:")
        console.log(metricName)
        console.log("state labels:")
        console.log(labels)
        console.log("state values:")
        console.log(values)
      });

  //}
    
  //request()

  const data = {
        labels: labels,
        datasets: [
          {
            label: metricName + " : for " + nodeName,
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
            data: values
          }
        ]
    };

    return (
      <div>
        <h2>Detailed Metric: {metricName} - for {nodeName} </h2>
        <Line data={data} />
      </div>
    )
  //}

  //return request()
}