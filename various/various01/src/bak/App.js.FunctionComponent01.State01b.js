import React, { useState } from 'react';
import State01b from './FunctionComponent01/State01b';
 
const App = () => {

  const greetingIn = 'Hello Stateful Function Component!-!';

  
  const [greeting] = useState(
    greetingIn
  );
  
  // State01b is returned by the app
  //return <State01b greetingIn = { greeting }/>;
  return <State01b greetingIn = { greeting }/>;
};
 
export default App;
