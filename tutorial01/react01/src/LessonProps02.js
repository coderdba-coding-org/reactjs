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

class RenderIt extends React.Component {
 	render(){
          return(
	     <div>
	     <h1>My car says</h1>
	     <Car brand="Ford" />
	     </div>
          ); 

          // this does not work (unlike in Lesson01Classes.js)
          //return (myelement.present());
        }
}

export default RenderIt;
