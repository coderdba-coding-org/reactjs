import logo from './logo.svg';
import './App.css';

import { F01Props } from './FunctionComponent01/F01Props'

function App() {

  const greeting = 'Hello again!!';

  return (
    <div className="App">
      <section>
        <F01Props greetingMessage={greeting}/>
      </section>
    </div>
  ) 
}

export default App;
