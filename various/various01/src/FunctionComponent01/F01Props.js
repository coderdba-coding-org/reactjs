import React from 'react';
 
export function F01Props(props) {
  const greeting = 'Hello Function Component!';
 
  // note that we are using the props and not the 'greeting' string defined above
  return <h1>{props.greetingMessage}</h1>;
}