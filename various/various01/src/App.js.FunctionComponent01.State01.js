import React, { useState } from 'react';
import { State01 } from './FunctionComponent01/State01'
 
const App = () => {

  const greeting = 'Hello Stateful Function Component!';
 
  // note that we are not sending any parameter to State01 function
  return <State01 />;
};