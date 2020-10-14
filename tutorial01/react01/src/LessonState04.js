//https://www.tutorialspoint.com/reactjs/reactjs_component_api.htm

// FORCE UPDATE STATE
// Sometimes we might want to update the component manually. This can be achieved using the forceUpdate() method.

import React from 'react';

class App extends React.Component {
   constructor() {
      super();
      this.forceUpdateHandler = this.forceUpdateHandler.bind(this);
   };
   forceUpdateHandler() {
      this.forceUpdate();
   };
   render() {
      return (
         <div>
            <button onClick = {this.forceUpdateHandler}>FORCE UPDATE</button>
            <h4>Random number: {Math.random()}</h4>
         </div>
      );
   }
}
export default App;
