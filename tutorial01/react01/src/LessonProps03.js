import React, { Component } from 'react';

// https://www.w3schools.com/REACT/react_props.asp

class Car extends React.Component {
  render() {
    return <h2>I am a {this.props.brand}!</h2>
  }
}

class RenderIt extends React.Component {
 	render(){

          const carbrand = "Ford";
          return(
	     <div>
	     <h1>My car is</h1>
	     <Car brand={carbrand} />
	     </div>
          ); 

        }
}

export default RenderIt;
