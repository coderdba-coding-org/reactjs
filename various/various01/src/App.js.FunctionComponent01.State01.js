import React, { useState } from 'react';
import State01 from './FunctionComponent01/State01';
 
const App = () => {

  // this greeting message will be reset by State01 with an initial value
  const greeting = 'Hello Stateful Function Component!';

  // output of State01 is returned by the app
  return <State01 />;
};
 
export default App;