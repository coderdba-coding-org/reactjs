import './App.css'
import { ReactSelect01 } from './ReactSelect01/ReactSelect01'

function App() {

  const componentState = this.state;

  return (
    <div className="App">
      <section>
        <ReactSelect01 componentState={componentState} />
      </section>
    </div>
  )

  /*
  return (
    <div className="App">
      <section>
        <LineChartApp />
      </section>
    </div>
  )
  */


}

export default App
