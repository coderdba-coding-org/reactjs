import React, { Component } from 'react';

// https://www.w3schools.com/REACT/react_props.asp

//const myelement = <Car brand="Ford" />;

class Car extends React.Component {
  present() {
    return <h2>I am a {this.props.brand}!</h2>;
  }
}

function MyCar(){
  let mycar = new Car();
  return mycar.present();
}

class RenderIt extends React.Component {
 	render(){
          return MyCar();
        }
}

export default RenderIt;
