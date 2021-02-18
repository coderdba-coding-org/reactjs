import React from 'react';
 
export function F01Props(props) {
  const greeting = 'Hello Function Component!';
 
  return <h1>{props.greetingMessage}</h1>;
}