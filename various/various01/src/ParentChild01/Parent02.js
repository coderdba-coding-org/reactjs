// Parent02/Child02: How to Pass Data between React Components: https://www.pluralsight.com/guides/how-to-pass-data-between-react-components
// From Child to Parent Using Callbacks
// HOWEVER,THAT EXAMPLE WAS INCOMPLETE - SO, USE https://medium.com/@nipunadilhara/passing-data-between-different-components-using-react-c8e27319ee69

import React, {Component} from 'react';
import Child02 from './Child02'

export class Parent extends React.Component {

    // initially message is null
    state = { message: "" }

    callbackFunction = (childData) => {
          //console.log("Data from child: " + childData)
          this.setState({message: childData})
    }
    
    render() {
            return (
                <div>
                     <Child02 parentCallback = {this.callbackFunction.bind(this)}/>
                     <p> {this.state.message} </p>
                </div>
            );
    }
    }