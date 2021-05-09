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

export default function Main(){

    // state to store the network json with baseline and actual values as well
    const [stateNetworkJson, setNetworkJson] = useState();
    const [stateApp, setApp] = useState();

    const handleChange = event => setApp(event.target.app);
    const handleSubmit = event => {
        alert('You have chosen: ' + stateApp);
        event.preventDefault()
    }

    return (
        <section>
          <div>
            <h1>Network Picker</h1>
            <form onSubmit={handleSubmit}>
              <label>
              Pick the App:
                <select app={app} onChange={handleChange}>
                  <option value="myApp">MyApp</option>
                </select>
              </label>
              <input type="submit" value="Submit" />
            </form>
          </div>
          <br></br>
          <div>
            <button onClick={handleClick}>Click to Re-check</button>
          </div>
        </section>
      )

}