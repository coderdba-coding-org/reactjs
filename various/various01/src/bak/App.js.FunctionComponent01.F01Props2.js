import logo from './logo.svg';
import './App.css';

import { F01Props2 } from './FunctionComponent01/F01Props2'

function App() {

  const greeting = 'Hello again 2!!';

  return (
    <div className="App">
      <section>
        <F01Props2 greetingMessage={greeting}/>
      </section>
    </div>
  ) 
}

export default App;
