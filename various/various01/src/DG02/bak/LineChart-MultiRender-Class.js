// https://www.pluralsight.com/guides/iterate-through-a-json-response-in-jsx-render-for-reactjs
// https://www.pluralsight.com/guides/load-and-render-json-data-into-react-components
// https://www.pluralsight.com/guides/executing-promises-in-a-react-component

import React from 'react';
import axios from 'axios';
import { LineChartClass } from "./LineChart-Class"

export default class LineChartMultiRenderClass extends React.Component {

    state = {
        app:   "",
        renderSegment: ""
      }

    componentDidMount() {

        console.log("Prop appName: ")
        console.log(this.props.appName)

        const url = 'http://localhost:8081/nodes/' + this.props.appName

        console.log("LineChartMultiRenderClass - componentDidMount() - URL is: " + url )
        //axios.get(url); // not sure if this additional one is required
        axios.get(url)
          .then(res => {
    
            // get the whole incoming data - which is a json
            const nodeListArray = resData.nodes
    
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



    }
}