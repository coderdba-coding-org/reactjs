//https://www.w3schools.com/REACT/react_lifecycle.asp
// The getDerivedStateFromProps method is called right before the render method:

import React from 'react';
import ReactDOM from 'react-dom';

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {favoritecolor: "red"};
  }
  static getDerivedStateFromProps(props, state) {
    return {favoritecolor: props.favcol };
  }
  render() {
    return (
      <h1>My Favorite Color is {this.state.favoritecolor}</h1>
    );
  }
}


class App extends React.Component {
        render(){
          return <Header favcol="yellow"/>
        }
}

export default App;
