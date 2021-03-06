import React from 'react';

// https://www.tutorialspoint.com/reactjs/reactjs_jsx.htm
// nested elements, conditional expressions, arithmetic, attributes

const myelement1 = <h1>I Love JSX! myelement1</h1>;
const myelement2 = React.createElement('h1', {}, 'I do not use JSX! myelement2');

const myelement3 = <h1>React is {5 + 5} times better with JSX</h1>;

const myelement4 = (
  <ul>
    <li>Apples</li>
    <li>Bananas</li>
    <li>Cherries</li>
  </ul>
);

const myelement5 = (
  <div>
    <h1>I am a Header.</h1>
    <h1>I am a Header too.</h1>
  </div>
);

const myelement6 = <input type="text" />;


class Jsx02 extends React.Component {

    render(){
      return (myelement1);
      return (myelement2);
  
      // This does not actually return both elements - instead returns the last one - myelement2 in this case
      //return (myelement1,  myelement2);
    }
}

export default Jsx02;
