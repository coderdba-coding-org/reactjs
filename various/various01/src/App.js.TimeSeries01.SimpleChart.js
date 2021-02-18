import logo from './logo.svg';
import './App.css';

import SimpleChart from './TimeSeries01/SimpleChart';

function App() {
  return (
    <div className="App">
      <section>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      </section>
      <section>
        <SimpleChart />
      </section>
    </div>
  );
}

export default App;
