// https://www.pluralsight.com/guides/iterate-through-a-json-response-in-jsx-render-for-reactjs
// https://www.pluralsight.com/guides/load-and-render-json-data-into-react-components
// https://www.pluralsight.com/guides/executing-promises-in-a-react-component

import React from 'react';
import axios from 'axios';
import LineChartClass from "./LineChart-Class"

export default class LineChartMultiRenderClass extends React.Component {

    state = {
        app:   "",
        nodes: "",
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
            const nodesGotten = res.data.nodes
            console.log("componentDidMount(): nodesGotten: ")
            console.log(nodesGotten)

            // set the state that will hold the whole data
            this.setState({app: this.props.appName})
            this.setState({nodes: nodesGotten})
    
            console.log("componentDidMount(): State app: ")
            console.log(this.state.app)
            console.log("componentDidMount(): State nodes: ")
            console.log(this.state.nodes)

            this.setState({renderSegment:
                (<div>
                  {nodesGotten.map((item, key) => (
                    <div key={key}><LineChartClass nodeName={Object.values(item)[0]}/></div>
                  ))}
                </div>
                )
                }
            )  

            console.log("componentDidMount(): State renderSegment: ")
            console.log(this.state.renderSegment)
            
           
          }); // end of axios 'then'
      }

      render() {
          //return "Work In Progress"
          return (this.state.renderSegment)
      }


}