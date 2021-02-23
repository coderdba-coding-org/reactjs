import React from 'react'
import data from './ForceGraph01/data/data.json'
import { ForceGraph } from './D3ForceGraph01/components/forceGraph'
import SimpleChart from './TimeSeries01/SimpleChart';

// somehow this import is not working
//import { LineChart } from './LineGraph01/components/lineChart'

import './App.css'

function App() {
  const nodeHoverTooltip = React.useCallback((node) => {
    return `<div>${node.name}</div>`
  }, [])

  // Calls the 'ForceGraph" function inside the "section" part
  return (
    // only one 'div' is possible - not multiple
    // To show another graph or component, make one more section

    /* this did not work: Got error 
    <section className="LineChart">
      <LineChart
        nodeHoverTooltip={nodeHoverTooltip}
      />
    </section> 
    */

    <div className="App">
      <header className="App-header">Force Graph Example</header>
      <section className="Main">
        <ForceGraph
          linksData={data.links}
          nodesData={data.nodes}
          nodeHoverTooltip={nodeHoverTooltip}
        />
      </section> 
    </div>

    /*
    <div className="App">
      <section>
          <SimpleChart />
      </section>
    </div>
    */
  )
}

export default App
