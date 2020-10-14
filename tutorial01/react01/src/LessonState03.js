import React from 'react';

//https://www.tutorialspoint.com/reactjs/reactjs_component_api.htm

// Set State
// setState() method is used to update the state of the component. 
// This method will not replace the state, but only add changes to the original state.

class App extends React.Component {
   constructor() {
      super();
		
      this.state = {
         data: []
      }
	
      this.setStateHandler = this.setStateHandler.bind(this);
   };
   setStateHandler() {
      var item = "setState..."
      var myArray = this.state.data.slice();
	  myArray.push(item);
      this.setState({data: myArray})
   };
   render() {
      return (
         <div>
            <button onClick = {this.setStateHandler}>SET STATE</button>
            <h4>State Array: {this.state.data}</h4>
         </div>
      );
   }
}
export default App;
