import React from 'react';

// https://www.tutorialspoint.com/reactjs/reactjs_jsx.htm
// nested elements, conditional expressions, arithmetic, attributes

const myelement1 = <h1>I Love JSX! myelement1</h1>;

const myelement2 = React.createElement('h1', {}, 'I do not use JSX! myelement2');
const myelement2a = React.createElement('h2', {}, 'I DO NOT use JSX! myelement2a');

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


class Jsx03 extends React.Component {

    render(){
      // concatenate elements using 'array' [....]
      let message = ["Hello ", myelement2, " ", myelement2a]
      message.push(" You can further read more in books!")
      return React.createElement("p", {}, message)
    }
}

export default Jsx03;
