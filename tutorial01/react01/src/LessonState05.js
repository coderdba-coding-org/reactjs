// https://www.tutorialspoint.com/reactjs/reactjs_component_api.htm
// Find Dom Node
// For DOM manipulation, we can use ReactDOM.findDOMNode() method. First we need to import react-dom.

import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {

   constructor() {
      super();
      this.findDomNodeHandler = this.findDomNodeHandler.bind(this);
   };

   findDomNodeHandler() {

      // if "div id = "myDiv" does not exist, this will throw error
      // so, have that part in render function
      // Also, in the index.js or other js render with 'root' and not myDiv

      var myDiv = document.getElementById('myDiv');
      ReactDOM.findDOMNode(myDiv).style.color = 'green';
   }

   render() {
      return (
         <div>
            <button onClick = {this.findDomNodeHandler}>FIND DOME NODE</button>
            <div id = "myDiv">NODE</div>
         </div>
      );
   }

}
export default App;
