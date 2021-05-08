// Parent02/Child02: How to Pass Data between React Components: https://www.pluralsight.com/guides/how-to-pass-data-between-react-components
// From Child to Parent Using Callbacks
// HOWEVER,THAT EXAMPLE WAS INCOMPLETE - SO, USE https://medium.com/@nipunadilhara/passing-data-between-different-components-using-react-c8e27319ee69


import React, {Component} from 'react';

export default class Child02 extends React.Component{
    
    state = { message: "message from child" }

    // NOTE NOTE: sendData actually is calling inside it the parent's function here!!
    //              --> that function's name was passed as property from parent!!
    sendData = () => {
        this.props.parentCallback("Hey Popsie, How’s it going?");
    }

    render() { 
        return (
         <div>
            <button onClick={this.sendData.bind(this)}>Click</button>
         </div>
    );
    }
};