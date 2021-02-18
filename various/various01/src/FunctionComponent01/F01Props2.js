import React from 'react';
 
// note that the parameter is not props, but a value 
// also, the parameter should be an array with {} - and can pass multiple items in the array
export function F01Props2({greetingMessage}) {
  const greeting = 'Hello Function Component!';
 
  // note that we are using the parameter sent to the function and not the 'greeting' string defined above
  return <h1>{greetingMessage}</h1>;
}