// https://stackoverflow.com/questions/61859872/how-can-i-resolve-this-silly-mistake-in-react-js

import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Line, Bar } from 'react-chartjs-2';

const LineChartFunc =() => {
    
    const [nodeName, setNodeName] = useState("")
    const [responseJson, setResponseJson] = useState([]);

    
    useEffect(() => {
        setNodeName("MyApp")
      }, [setNodeName]);
    

    useEffect(()=>{

        
        const fetchData = async () => {

            const res = await axios.get(`http://localhost:8081/nodedetaillabelsvalues/MyApp`);
            console.log(res.data)
            setResponseJson(res.data);
        }

        console.log("responseJson is:")
        console.log(responseJson)

    }, [nodeName]);

    return "Dummy Return"

}

export default LineChartFunc;
