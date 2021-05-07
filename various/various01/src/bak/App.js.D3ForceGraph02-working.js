import React, { useEffect, useState } from 'react'
import './App.css'
//import { BasicD3App } from './D3Charts01/charts/BasicD3App'
//import { BarChartApp } from './D3Charts01/charts/BarChartApp'
//import { LineChartApp } from './D3LineChart01/LineChartApp'
import { ForceGraph02App } from './D3ForceGraph02/ForceGraph02App'

function App() {
  return (
    /*
    <div className="App">
      <section>
        <BasicD3App />
      </section>
    </div>
*/

    /*
    <div className="App">
      <section>
        <BarChartApp />
      </section>
    </div>
*/

    /*
    <div className="App">
      <section>
        <LineChartApp />
      </section>
    </div>
  */

    <div className="App">
      <section>
        <ForceGraph02App />
      </section>
    </div>
  )
}

export default App
