//https://www.w3schools.com/REACT/react_lifecycle.asp

/*
getSnapshotBeforeUpdate
In the getSnapshotBeforeUpdate() method you have access to the props and state before the update, meaning that even after the update, you can check what the values were before the update.
If the getSnapshotBeforeUpdate() method is present, you should also include the componentDidUpdate() method, otherwise you will get an error.
The example below might seem complicated, but all it does is this:
When the component is mounting it is rendered with the favorite color "red".
When the component has been mounted, a timer changes the state, and after one second, the favorite color becomes "yellow".
This action triggers the update phase, and since this component has a getSnapshotBeforeUpdate() method, this method is executed, and writes a message to the empty DIV1 element.
Then the componentDidUpdate() method is executed and writes a message in the empty DIV2 element:

Example:
Use the getSnapshotBeforeUpdate() method to find out what the state object looked like before the update
*/

import React from 'react';
import ReactDOM from 'react-dom';

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {favoritecolor: "red...maybe"};
  }
  componentDidMount() {
    setTimeout(() => {
      this.setState({favoritecolor: "yellow"})
    }, 2000)
  }
  getSnapshotBeforeUpdate(prevProps, prevState) {
    document.getElementById("div1").innerHTML =
    "Before the update, the favorite was " + prevState.favoritecolor;
  }
  componentDidUpdate() {
    document.getElementById("div2").innerHTML =
    "The updated favorite is " + this.state.favoritecolor;
  }
  render() {
    return (
      <div>
        <h1>My Favorite Color is {this.state.favoritecolor}</h1>
        <div id="div1"></div>
        <div id="div2"></div>
      </div>
    );
  }
}

class App extends React.Component {
        render(){
          return <Header /> 
        }
}

export default App;
