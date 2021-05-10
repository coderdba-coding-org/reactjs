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
    const [app, setApp] = useState('myApp2');
    const [networkJson, setNetworkJson] = useState();
    
    // setting this may try a re-render - need to check
    //const [networkSVG, setNetworkSVG] = useState();

    // functions to handle form/button events
    const handleChange = event => {
        setApp(event.target.value);
    }
 
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

    // for section that displays messages based on chosen parameters
    const MessageForChosenValues = () => {
        if (app == "myApp") {
            return ("Generated network diagram for: " + app + " (may take a few moments)")
        } else {
            return ("Cannot generate network-diagram for this app: " + app)
        }
    }

    // function for displaying network diagram
    const DisplayNetworkDiagram = () => {
        console.log("DisplayNetworkDiagram(): App is: ", app)
        // setting this may try a re-render - need to check
        //setNetworkSVG(DGApp(app))
        
        if (app == "myApp") {
            return(DGApp(app))
        } else {
            //return ("Cannot generate network diagram for this app: " + app)
            return ("")
        }
    }

    // TBD:
    // Remove submit
    // Introduce a message on what can be fetched
    // Introduce a message on 'wait, fetching'
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
              <br></br>
               <MessageForChosenValues />
          </div>
          <div>
               <DisplayNetworkDiagram />
          </div>
        </section>
      )

    //-------------------- SAVED STUFF BELOW --------------------------------------------//

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

    /* Original working return() */
    /*
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
      */

    /*
    // function for generating network diagram
    // this is similar to DisplayNetworkDiagram 
    // - need to check if this can be used with a button (or delete it)
    const GenerateNetworkDiagram = () => {
        //console.log("GenerateNetworkDiagram(): App is: ", app)
        // setting this may try a re-render - need to check
        //setNetworkSVG(DGApp(app))

        if (app == "myApp") {
            return(DGApp(app))
        } else {
            return ("")
        }
    }
    */

      //<button onClick={DGApp(app)}>Click for Network Diagram</button>
      //<button onClick={GenerateNetworkDiagram}>Click for Network Diagram</button>
      
      //<button onClick={setNetworkSVG(DGApp(app))}>Click for Network Diagram</button>
      //<networkSVG />

}