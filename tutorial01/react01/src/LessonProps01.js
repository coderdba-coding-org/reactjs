import React, { Component } from 'react';

// https://www.w3schools.com/REACT/react_props.asp

class Car extends React.Component {
  render() {
    return <h2>I am a {this.props.brand}!</h2>
  }
  present() {
    return <h2>I am a {this.props.brand}!</h2>
  }
}

// this instantiates 'Car' class with a prop 'brand="Ford"'
const myelement = <Car brand="Ford" />;

class RenderIt extends React.Component {
 	render(){
          return myelement;

          // this does not work (unlike in Lesson01Classes.js)
          //return (myelement.present());
        }
}

export default RenderIt;
