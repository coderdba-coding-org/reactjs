// Design:
// Drop-down to choose a network 
// Drop-down to choose whether one wants network or chart for the nodes
// Then click a button
// Button click will bring a network or charts for all nodes - depending upon network/chart choice
// Also, it will populate the network into a state variable
// Further option: Drop down to choose one or more 'hot' nodes - derived from the state variable that saves the network
// Then click another button
// This button click will bring the charts for only the hot nodes

import React, { useState } from 'react';
import { DGApp } from './DGApp'
import  Chart  from './Chart'
import  ChartFunc  from './ChartFunc'
import axios from 'axios'
import LineChartClass from './LineChart-Class'

export default function Main(){

    // state to store the network json with baseline and actual values as well
    const [app, setApp] = useState('MyApp');
    const [action, setAction] = useState('networkDiagram');
    const [networkNodes, setNetworkNodes] = useState();
    
    // setting this may try a re-render - need to check
    //const [networkSVG, setNetworkSVG] = useState();

    // functions to handle form/button events
    const handleChangeApp = event => {
        setApp(event.target.value);
    }

    // functions to handle form/button events
    const handleChangeAction = event => {
        setAction(event.target.value);
    }
 
    const handleSubmit = event => {
        if (app == 'ChooseAnApp') {
            alert('Choose a different app. Cannot choose ' + app);
        }
        else {
            alert('You have chosen: ' + app);
        }

        event.preventDefault()
    }

    const handleClick = event => {
        if (app == 'ChooseAnApp') {
            alert('Choose a different app (re-checking). Cannot choose ' + app);
        }
        else {
            alert('You have chosen (re-checking): ' + app);
        }
        event.preventDefault()
    }

    // for section that displays messages based on chosen parameters
    const MessageForChosenValues = () => {
        if (app == "MyApp" && action == 'networkDiagram') {
            return ("Network diagram for: " + app + " (may take a few moments)")
        } else {
            return ("Cannot generate network-diagram for this app: " + app + ". Choose a different app")
        }
    }

    // function for displaying network diagram
    const DisplayNetworkDiagram = () => {
            
        console.log("DisplayNetworkDiagram(): App is: " + app)
        console.log("DisplayNetworkDiagram(): Action is: " + action)

        if (app == "MyApp" && action == 'networkDiagram') {

            return(DGApp(app))
        } else {
            //return ("Cannot generate network diagram for this app: " + app)
            return ("Choose the correct combination of app and action")
        }
    }
    // function for displaying line chart
    const DisplayLineChart = () => {
            
      console.log("DisplayLineChart(): App is: " + app)
      console.log("DisplayLineChart(): Action is: " + action)

      if (app == "MyApp" && action == 'networkDiagram') {

          // dont enclose the <div> part below in quotes or double-quotes
          return(<div> <LineChartClass nodeName={app}/> </div>)  
      } else {
          //return ("Cannot generate network diagram for this app: " + app)
          return ("Choose the correct combination of app and action")
      }
  }

  // function to display charts for the nodes
  // 'async' is required to use 'await' within it
  //const DisplayChartsForTheNodes = async() => {
  const DisplayChartsForTheNodesFetchAwait = () => {

    console.log("DisplayChartsForTheNodesFetchAwait(): In the function now.")

    const getNodes = async() => {
      const response = await fetch('http://localhost:8081/nodes/' + app);
      const responseJson = await response.json();
      console.log("DisplayChartsForTheNodes(): responseJson")
      console.log(responseJson);

      const nodes = responseJson.nodes.map(d => Object.create(d));
      console.log("DisplayChartsForTheNodes(): nodes")
      console.log(nodes)
      console.log(new Date().getTime())

      // return nodes
      //return responseJson

      const chartList = responseJson.nodes((item, i) => <div> <LineChartClass nodeName={item.Id}/> </div>)
      return (
        chartList
      );
    }

    /*
    const response = getNodes()
    console.log("DisplayChartsForTheNodesFetchAwait: response: ", response)
    console.log(new Date().getTime())
    *.
    //return(<div> {response.Id} </div>)
    //return(<div> <LineChartClass nodeName={response.Id}/> </div>)  

    /*
    const chartList = response.map((item, i) => <div> <LineChartClass nodeName={item.Id}/> </div>)
    return (
      chartList
    );

    */

    return(getNodes()) 

    //return("Work in progress")
  }

  //const DisplayChartsForTheNodesAxios = () => {

  function DisplayChartsForTheNodesAxios() {

    console.log("DisplayChartsForTheNodesAxios(): In the function now.")

    const url = 'http://localhost:8081/nodes/' + app

    const axiosMessage = axios.get(url)
      .then(res => {
        // get the whole incoming data - which is an array of jsons
        const dataGotten = res.data;

        console.log("DisplayChartsForTheNodesAxios(): dataGotten: ")
        console.log(dataGotten)
       
        return "finished axios call"
      });

      return(axiosMessage + "Work in progress")
  }

  /*
  // https://stackoverflow.com/questions/47658765/objects-are-not-valid-as-a-react-child-found-object-promise
  function DisplayChartsForTheNodesAxios2 () {
  
    const getNodes = async() => {

      const url = 'http://localhost:8081/nodes/' + app

      try {
        const res = await axios.get(url);
        const resData = res.data
        const resDataNodes = res.data.nodes

        console.log("DisplayChartsForTheNodesAxios2(): res: ")
        console.log(res)
        console.log(typeof(res))
        console.log("DisplayChartsForTheNodesAxios2(): resData: ")
        console.log(resData)
        console.log(typeof(resData))
        console.log("DisplayChartsForTheNodesAxios2(): resDataNodes: ")
        console.log(resDataNodes)
        console.log(typeof(resDataNodes))

        //const items = resData.map((item, i) => (
        /*
        const items = resDataNodes.values((item, i) => (
          <li key={i} className="list-group-item">{item.id}</li>
        ));
        */

        /*
        const resDataNodesMap = Object.values(resDataNodes)
        console.log("DisplayChartsForTheNodesAxios2(): resDataNodesMap: ")
        console.log(resDataNodesMap)
        console.log(typeof(resDataNodesMap))

        return (
          <div>
            <ul className="list-group list-group-flush">
              {items}
            </ul>
          </div>
        );
      }
      catch (err) {
        console.log(err)
      }
    }

    return getNodes()
  }
  */

  // https://www.pluralsight.com/guides/iterate-through-a-json-response-in-jsx-render-for-reactjs
  // https://stackoverflow.com/questions/55561320/how-to-fix-the-map-is-not-a-function-error-in-javascript
  // https://stackoverflow.com/questions/3199588/fastest-way-to-convert-javascript-nodelist-to-array
  function DisplayChartsForTheNodesAxios3() {
  
    const getNodes = async() => {
      const url = 'http://localhost:8081/nodes/' + app

      try {
        const res = await axios.get(url);
        const resData = res.data
        const resDataNodes = res.data.nodes

        /*
        console.log("DisplayChartsForTheNodesAxios2(): res: ")
        console.log(res)
        console.log(typeof(res))
        console.log("DisplayChartsForTheNodesAxios2(): resData: ")
        console.log(resData)
        console.log(typeof(resData))
        console.log("DisplayChartsForTheNodesAxios2(): resDataNodes: ")
        console.log(resDataNodes)
        console.log(typeof(resDataNodes))
        */

        return resData;

        /*
        const Node = ({id}) => (
          <div>
            LineChartClass nodeName={id}
          </div>
        );

        return (
          <div>
            {resData((Node) => (
              <Node
                id={resData.id}
              />
            ))}
          </div>
        );
        */
      }
      catch (err) {
        console.log(err)
      }
    }

    //let nodeList = []
    //const nodeList = await getNodes()
    const nodeList =  getNodes()
    var nodeListArray = Array.prototype.slice.call(nodeList);

    console.log("DisplayChartsForTheNodesAxios3(): nodeList is: ")
    console.log(nodeList)
    console.log("DisplayChartsForTheNodesAxios3(): nodeListArray is: ")
    console.log(nodeListArray)

    const Node = ({ id }) => (
      <div>
        LineChartClass nodeName={id}
      </div>
    );

    return (
      <div>
        {nodeListArray.map((oneNode) => (
          <Node
            id={oneNode.id}
          />
        ))}
      </div>
    );

    //return getNodes()
  }

  const DisplayChartsForTheNodesAxios3aFetchURL = async() =>  {

      const url = 'http://localhost:8081/nodes/' + app

      try {
        const res = await axios.get(url);
        const resData = res.data
        const resDataNodes = res.data.nodes
        console.log("DisplayChartsForTheNodesAxios3aFetchURL(): resData is: ")
        console.log(resData) //work well up to here
        //return "work in progress"
        return resData;
      }
      catch (err) {
        console.log(err)
      }
    
  }

  const DisplayChartsForTheNodesAxios3a = () => {

    DisplayChartsForTheNodesAxios3aFetchURL()
    .then(resData => {

      console.log("DisplayChartsForTheNodesAxios3a(): resData is: ")
      console.log(resData) // prints ok without saying Promise
      console.log("DisplayChartsForTheNodesAxios3a(): resData datatype is: ")
      console.log(typeof(resData))
      console.log("DisplayChartsForTheNodesAxios3a(): resData nodes is: ")
      console.log(resData.nodes)

      const nodeListArray = resData.nodes
      //const nodeListArray = JSON.parse(resData)
      //const nodeListArray = Array.prototype.slice.call(resData)
      console.log("DisplayChartsForTheNodesAxios3a(): nodeListArray is: ")
      console.log(nodeListArray)
      console.log("DisplayChartsForTheNodesAxios3a(): nodeListArray is: ")
      console.log(typeof(nodeListArray))

      
      const Node = ({ id }) => (
        <div>
          LineChartClass nodeName={id}
        </div>
      );
    
      return (
        <div>
          {nodeListArray.map((oneNode) => (
           <Node
            id={oneNode.id}
          />
          ))}
        </div>
      );
    });

    //var nodeList = []
    //nodeList = await DisplayChartsForTheNodesAxios3aFetchURL()  
    //var nodeListArray = []
    //const nodeListArray = Array.prototype.slice.call(nodeList)

    //console.log("DisplayChartsForTheNodesAxios3a(): nodeList is: ")
    //console.log(nodeList)
    //console.log("DisplayChartsForTheNodesAxios3a(): nodeListArray is: ")
    //console.log(nodeListArray)

    /*
    const Node = ({ id }) => (
      <div>
        LineChartClass nodeName={id}
      </div>
    );
    
    return (
      <div>
        {nodeListArray.map((oneNode) => (
          <Node
            id={oneNode.id}
          />
        ))}
      </div>
    );

    */

    return "work in progress"
    //return getNodes()
  }

  //const DisplayChartsForTheNodesAxios3a = async() => {

    const DisplayChartsForTheNodesAxios3a0 = () => {

    const getData = async()=>{
    const resData = await DisplayChartsForTheNodesAxios3aFetchURL()  
    console.log("DisplayChartsForTheNodesAxios3a(): resData is: ")
    console.log(resData) // prints this ok - does not say promise

    return resData
    }

    const nodeList = getData()

    //var nodeList = []
    //nodeList = await DisplayChartsForTheNodesAxios3aFetchURL()  
    //var nodeListArray = []
    const nodeListArray = Array.prototype.slice.call(nodeList)

    console.log("DisplayChartsForTheNodesAxios3a(): nodeList is: ")
    console.log(nodeList)
    //console.log("DisplayChartsForTheNodesAxios3a(): nodeListArray is: ")
    //console.log(nodeListArray)

    /*
    const Node = ({ id }) => (
      <div>
        LineChartClass nodeName={id}
      </div>
    );
    
    return (
      <div>
        {nodeListArray.map((oneNode) => (
          <Node
            id={oneNode.id}
          />
        ))}
      </div>
    );

    */

    return "work in progress"
    //return getNodes()
  }

    // TBD:
    // Remove submit
    // Introduce a message on 'wait, fetching'
    // DONE:
    // Introduce a message on what can be fetched (done)
    return (
        <section>
          <div>
            <h1>Application Health Visualizer</h1>
            <form>
              <label>
              Pick the App:
                <select value={app} onChange={handleChangeApp}>
                  <option value="ChooseAnApp">Choose an App</option>
                  <option value="MyApp">MyApp</option>
                  <option value="MyApp2">MyApp2</option>
                </select>
              </label>
              <br></br>
              <br></br>
              <label>
              Pick the Action:
                <select value={action} onChange={handleChangeAction}>
                  <option value="networkDiagram">Network Diagram</option>
                  <option value="graphs">Graphs</option>
                </select>
              </label>
            </form>
          </div>
          <div>
              <br></br>
               <MessageForChosenValues />
          </div>
          <div>
              <h2>Charts for the Nodes</h2>
              <DisplayChartsForTheNodesAxios3a />
          </div>
        </section>

      )

/*
    return (
        <section>
          <div>
            <h1>Application Health Visualizer</h1>
            <form>
              <label>
              Pick the App:
                <select value={app} onChange={handleChangeApp}>
                  <option value="ChooseAnApp">Choose an App</option>
                  <option value="MyApp">MyApp</option>
                  <option value="MyApp2">MyApp2</option>
                </select>
              </label>
              <br></br>
              <br></br>
              <label>
              Pick the Action:
                <select value={action} onChange={handleChangeAction}>
                  <option value="networkDiagram">Network Diagram</option>
                  <option value="graphs">Graphs</option>
                </select>
              </label>
            </form>
          </div>
          <div>
              <br></br>
               <MessageForChosenValues />
          </div>
          <div>
               <h2>Network Diagram</h2>
               <DisplayNetworkDiagram />
          </div>
          <div>
               <h2>Line Chart Class for the App</h2>
               <LineChartClass nodeName={app}/>
          </div>
          <div>
               <h2>Line Chart Class for the App</h2>
               <DisplayLineChart />
          </div>
          <div>
              <DisplayChartsForTheNodes />
          </div>
        </section>

      )
*/

}