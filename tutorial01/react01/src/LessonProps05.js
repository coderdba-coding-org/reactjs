import React, { Component } from 'react';

// https://www.w3schools.com/REACT/react_props.asp

class Car extends React.Component {
  
  //If your component has a constructor function, the props should be passed 
  //to the constructor and also to the React.Component via the super() method.
  constructor(props) {
    super(props);
    this.brand = props.carbrand.brand;
    this.model = props.carbrand.model;
  }

  render() {
    //this also works, but the point here is to transfer props to class variables and then render
    //return <h2>I am a {this.props.carbrand.brand} {this.props.carbrand.model}!</h2>
    return <h2>I am a {this.brand} model  {this.model}!</h2>
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
