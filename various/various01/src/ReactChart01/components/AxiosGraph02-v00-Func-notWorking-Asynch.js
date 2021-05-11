//https://www.digitalocean.com/community/tutorials/react-axios-react
//https://codesandbox.io/s/react-chartjs-2-line-chart-example-5z3ss?from-embed
// For UseEffect to avoid infinite loop: https://dmitripavlutin.com/react-useeffect-infinite-loop/#:~:text=The%20infinite%20loop%20is%20fixed,callback%2C%20dependencies)%20dependencies%20argument.&text=Adding%20%5Bvalue%5D%20as%20a%20dependency,so%20solves%20the%20infinite%20loop.

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Line } from "react-chartjs-2"

export default function AxiosGraph02Func() {

    console.log("In AxiosGraph02Func")

    // global variables
    let nodeName = ""
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
    
    const request = async () => {
      try {

        console.log("In try block, about to call URL")
        // get data from a url endpoint
        // somehow axios does not work without the usual construct
        //const response = await axios.get(`http://localhost:8081/nodedetaillabelsvalues/MyApp`);

        //const response = await fetch (`http://localhost:8081/nodedetaillabelsvalues/MyApp`);
        //const data = await response.json()

        const data = await (await fetch (`http://localhost:8081/nodedetaillabelsvalues/MyApp`)).json();

        console.log("data gotten: ")
        console.log(data)

        console.log("data gotten - node_name: ")
        console.log(data.node_name)

        nodeName = data.node_name
        metricName = data.metric_name
        labels = data.labels
        values = data.values

        console.log("nodeName: " + nodeName)
        console.log("metricName: " + metricName)
        console.log("dummy: " + dummy)

        dummy = "dummy modified"

      } catch(error) {
        console.log("error", error);
        // appropriately handle the error
      }

      return nodeName
    }

    return request().

    //console.log("dummy outside: " + dummy)

    //return "Returning Node: " + nodeName
}
