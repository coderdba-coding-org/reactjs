//https://www.w3schools.com/REACT/react_lifecycle.asp
// At first my favorite color is red, but give me a second, and it is yellow instead:

// In the shouldComponentUpdate() method you can return a Boolean value that specifies whether React should continue with the rendering or not.
// The default value is true.
// The example below shows what happens when the shouldComponentUpdate() method returns false:
// Example: Stop the component from rendering at any update:

import React from 'react';
import ReactDOM from 'react-dom';

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {favoritecolor: "red"};
  }
  shouldComponentUpdate() {
    return false;
  }
  changeColor = () => {
    this.setState({favoritecolor: "blue"});
  }
  render() {
    return (
      <div>
      <h1>My Favorite Color is {this.state.favoritecolor}</h1>
      <button type="button" onClick={this.changeColor}>Change color</button>
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


