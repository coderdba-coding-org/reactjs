import React, { useState } from 'react';
import State01a from './FunctionComponent01/State01a';
 
const App = () => {

  // this greeting message will be sent to State01a
  // But, if we change this string and save App.js, it is not getting refreshed reactively
  const greeting = 'Hello Stateful Function Component!-!';

  // this is not the same way how we called in State01 
  const showthis = State01a(greeting);
  return showthis;

  // Doing as below will lead to 'unreachable code'
  //return <State01a(greeting) />;
};
 
export default App;