//https://www.w3schools.com/REACT/react_lifecycle.asp
// At first my favorite color is red, but give me a second, and it is yellow instead:

import React from 'react';
import ReactDOM from 'react-dom';

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {favoritecolor: "red ... or, wait a bit, let us see"};
  }
  componentDidMount() {
    setTimeout(() => {
      this.setState({favoritecolor: "yellow"})
    }, 2000)
  }
  render() {
    return (
      <h1>My Favorite Color is {this.state.favoritecolor}</h1>
    );
  }
}

class App extends React.Component {
        render(){
          return <Header /> 
        }
}

export default App;


