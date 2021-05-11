//https://www.digitalocean.com/community/tutorials/react-axios-react
//https://codesandbox.io/s/react-chartjs-2-line-chart-example-5z3ss?from-embed
// For UseEffect to avoid infinite loop: https://dmitripavlutin.com/react-useeffect-infinite-loop/#:~:text=The%20infinite%20loop%20is%20fixed,callback%2C%20dependencies)%20dependencies%20argument.&text=Adding%20%5Bvalue%5D%20as%20a%20dependency,so%20solves%20the%20infinite%20loop.

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Line } from "react-chartjs-2"

export default function AxiosGraph02Func() {

  console.log("In AxiosGraph02Func")

  // state to store the network json with baseline and actual values as well
  const [nodeName, setNodeName] = useState()
  const [metricName, setMetricName] = useState()
  const [labels, setLabels] = useState()
  const [values, setValues] = useState()
  const [chartData, setChartData] = useState({})

  //useEffect(() => setCount(count + 1), [value]); //example

  //useEffect(() => setNodeName("abc")) // works
  useEffect(() => setNodeName(getAbc()))

  const getAbc = () => {
    return "abc-gotten"
  }

  return "OK This is fine 2 " + nodeName

}
