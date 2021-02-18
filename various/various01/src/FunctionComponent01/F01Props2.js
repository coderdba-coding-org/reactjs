import React from 'react';
 
// note that the parameter is not props, but a value 
export function F01Props2({greetingMessage}) {
  const greeting = 'Hello Function Component!';
 
  // note that we are using the parameter sent to the function and not the 'greeting' string defined above
  return <h1>{greetingMessage}</h1>;
}