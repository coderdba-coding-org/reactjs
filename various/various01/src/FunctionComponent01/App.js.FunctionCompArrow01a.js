import React from 'react';
 
const App = () => {
  const greeting = 'Hello Arrow Function Component 2!';
 
  return <Headline value={greeting} />;
};
 
// without return
const Headline = ({ value }) => 
 <h1>{value}</h1>;
 
export default App;
