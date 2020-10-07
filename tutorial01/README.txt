#==============
# DOCS
#==============
Main Tutorials:
https://www.w3schools.com/REACT/
https://www.tutorialspoint.com/reactjs/reactjs_components.htm

In depth jsx: 
https://www.tutorialspoint.com/jsx-in-depth-in-react-js --> for React.createElement
https://learn.co/lessons/react-create-element --> for React.createElement
https://stackoverflow.com/questions/61794412/how-to-concatenate-react-objects-without-jsx --> concatenate elements/objects

Some more reading:
https://datacadamia.com/web/javascript/react/children


#==============
# START WORK
#==============
Comment out private registries in ~/.npmrc
To check - npm config get

# Install app initiator
npm install -g create-react-app

# Create app template
Example: npx create-react-app myfirstreact

npx create-react-app react01

Success! Created react01 at /Users/dbgsm0/stuff/mystuff/coderdba-coding-org/reactjs/w3schools/react01
Inside that directory, you can run several commands:

  npm start
    Starts the development server.

  npm run build
    Bundles the app into static files for production.

  npm test
    Starts the test runner.

  npm run eject
    Removes this tool and copies build dependencies, configuration files
    and scripts into the app directory. If you do this, you can’t go back!

We suggest that you begin by typing:

  cd react01
  npm start

Happy hacking!

# Start the app
cd react01
npm start

# NOTE:
index.js is the entrypoint
Per initial npm create-react-app, it calls App.js within it

# Theory
React creates a VIRTUAL DOM in memory.

Instead of manipulating the browser's DOM directly, React creates a virtual DOM in memory, 
where it does all the necessary manipulating, before making the changes in the browser DOM.
React only changes what needs to be changed!
React finds out what changes have been made, and changes only what needs to be changed.

# Modify code and see it gets reflected automatically in browser

src/App.js:
import React, { Component } from 'react';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Hello World!</h1>
      </div>
    );
  }
}

export default App;

# Theory - Component
https://reactjs.org/docs/components-and-props.html
The simplest way to define a component is to write a JavaScript function:

function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}
This function is a valid React component because it accepts a single “props” (which stands for properties) object argument with data and returns a React element. We call such components “function components” because they are literally JavaScript functions.

You can also use an ES6 class to define a component:

class Welcome extends React.Component {
  render() {
    return <h1>Hello, {this.props.name}</h1>;
  }
}


# Theory - root element and getelementbyid(root)
NOTE: Not sure if it can be called by any name - does not have to be 'root' 
https://www.w3schools.com/REACT/react_render.asp --> this says it can be named something else, but it did not work

https://datacadamia.com/web/javascript/react/root
The root element of the React DOM tree is the one that is passed to the rendering function ReactDOM.render
- STUFF INSIDE IT WILL BE MANAGED BY REACT DOM
- Example:
<div id="root">
<!-- called the "root" DOM node because everything inside it will be managed by React DOM -->
</div>

A React tree is created when a root element is rendered
https://datacadamia.com/web/javascript/react/tree

# Create src/index.js and src/index.html
As soon as you create index.js will be picked up, which in turn gets stuff from index.js 
NOTE: index.html did not seem to have any effect

index.js:

import React from 'react';
import ReactDOM from 'react-dom';

const myfirstelement = <h1>Hello React!!</h1>

ReactDOM.render(myfirstelement, document.getElementById('root'));

index.html:

<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>React App</title>
  </head>
  <body>

    <div id="root"></div>

  </body>
</html>

# Theory
React Components
Components are independent and reusable bits of code. 
They serve the same purpose as JavaScript functions, but work in isolation and returns HTML via a render function.
Components come in two types, Class components and Function components,

