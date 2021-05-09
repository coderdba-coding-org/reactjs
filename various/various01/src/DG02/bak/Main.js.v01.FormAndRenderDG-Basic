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

export default function Main(){

    // state to store the network json with baseline and actual values as well
    const [app, setApp] = useState('myApp');
    const [networkJson, setNetworkJson] = useState();
    const [networkSVG, setNetworkSVG] = useState();

    // functions to handle form/button events
    const handleChange = event => setApp(event.target.value);
    const handleSubmit = event => {
        if (app == 'chooseAnApp') {
            alert('Choose a different app. Cannot choose ' + app);
        }
        else {
            alert('You have chosen: ' + app);
        }

        event.preventDefault()
    }
    const handleClick = event => {
        if (app == 'chooseAnApp') {
            alert('Choose a different app (re-checking). Cannot choose ' + app);
        }
        else {
            alert('You have chosen (re-checking): ' + app);
        }
        event.preventDefault()
    }

    /* Cannot call here? Use DGApp.js
    const GenerateNetworkDiagram = () => {
        const containerRef = React.useRef("someArbitraryRef")
        React.useEffect(() => {DG(containerRef.current, app) }, [])
        return (<div ref={containerRef} />)
    }
    */

    // use this with the "return 1" below
    const DisplayNetworkDiagram = () => {
        console.log("DisplayNetworkDiagram(): App is: ", app)
        //setNetworkSVG(DGApp(app))
        return(DGApp(app))
    }

    const GenerateNetworkDiagram = () => {
        console.log("GenerateNetworkDiagram(): App is: ", app)
        //setNetworkSVG(DGApp(app))
        return(DGApp(app))
    }

    /* return 1: This works when the state 'app' defaults to 'myApp' */
    /*
    return (
        <div className="App">
        <section>
          <h1>MyApp Hot Spots!!</h1>
          <DisplayNetworkDiagram />
        </section>
      </div>
    )
    */

    
    return (
        <section>
          <div>
            <h1>Network Picker</h1>
            <form onSubmit={handleSubmit}>
              <label>
              Pick the App:
                <select value={app} onChange={handleChange}>
                  <option value="chooseAnApp">Choose an App</option>
                  <option value="myApp">MyApp</option>
                  <option value="myApp2">MyApp2</option>
                </select>
              </label>
              <input type="submit" value="Submit" />
            </form>
          </div>
          <br></br>
          <div>
            <button onClick={handleClick}>Click to Re-check</button>
          </div>
          <div>
               <DisplayNetworkDiagram />
          </div>
        </section>
      )
    

      //<button onClick={DGApp(app)}>Click for Network Diagram</button>
      //<button onClick={GenerateNetworkDiagram}>Click for Network Diagram</button>
      
      //<button onClick={setNetworkSVG(DGApp(app))}>Click for Network Diagram</button>
      //<networkSVG />

}