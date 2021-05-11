//https://github.com/reactchartjs/react-chartjs-2/blob/master/example/src/components/line.js
//https://mdbootstrap.com/docs/react/advanced/charts/ 
//https://medium.com/@ensallee/a-beginners-guide-to-react-part-2-hooks-edition-46c2925b39b1
//https://www.digitalocean.com/community/tutorials/react-axios-react
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Line } from "react-chartjs-2"

export default function AxiosGraph02Func(inputNodeName) {

    console.log("In AxiosGraph02Func")

    // state to store the network json with baseline and actual values as well
    const [nodeName, setNodeName] = useState("dummyNode")
    const [chartData, setChartData] = useState()
    //const [metricName, setMetricName] = useState()
    //const [labels, setLabels] = useState()
    //const [values, setValues] = useState()

    //setNodeName(inputNodeName)

    /*
    useEffect(() => {
        fetchGraph(nodeName)
     }, [nodeName])
     */

    const fetchGraph = async(nodeName) => {

        return "abc"
    }

    return fetchGraph(inputNodeName)
    
}