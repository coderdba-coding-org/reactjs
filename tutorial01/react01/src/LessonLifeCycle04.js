//https://www.w3schools.com/REACT/react_lifecycle.asp

// getDerivedStateFromProps(props, state): 
// If the component gets updated, the getDerivedStateFromProps() method is called:
// This updates the getDerivedStateFromProps method is called. 
// This is the first method that is called when a component gets updated.
// This is still the natural place to set the state object based on the initial props.

// The example below has a button that changes the favorite color to blue, 
// but since the getDerivedStateFromProps() method is called, which updates 
// the state with the color from the favcol or otherFavcol attribute or some other thing also (need not be from props only)

import React from 'react';
import ReactDOM from 'react-dom';

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {favoritecolor: "red"};
  }
  static getDerivedStateFromProps(props, state) {
    //return {favoritecolor: props.favcol };
    //return {favoritecolor: props.otherFavcol };
    return {favoritecolor: "anything" };
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
          return <Header favcol="yellow to begin with" otherFavcol="green" /> 
        }
}

export default App;


