import React, { Component } from 'react';

// https://www.w3schools.com/REACT/react_props.asp

class Car extends React.Component {
  render() {
    return <h2>I am a {this.props.carbrand.brand} {this.props.carbrand.model}!</h2>
  }
}

class RenderIt extends React.Component {
 	render(){

          const mycarbrand = {brand: "Ford", model: "Mustang"};
          return(
	     <div>
	     <h1>My car is</h1>
	     <Car carbrand={mycarbrand} />
	     </div>
          ); 

        }
}

export default RenderIt;
