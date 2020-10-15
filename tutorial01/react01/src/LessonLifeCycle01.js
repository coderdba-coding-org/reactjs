//https://www.w3schools.com/REACT/react_lifecycle.asp
// The constructor method is called, by React, every time you make a component:

import React from 'react';
import ReactDOM from 'react-dom';

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {favoritecolor: "red"};
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

