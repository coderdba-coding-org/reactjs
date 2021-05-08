// Parent01/Child01: How to Pass Data between React Components: https://www.pluralsight.com/guides/how-to-pass-data-between-react-components
import React, {Component} from 'react';
import Child01 from './Child01'
export class Parent extends React.Component {

// Sending data as a state is not obligatory. 
// You can use simple vars or const variables to pass data from parent to child.
state = { data : "Hello World" } 

render() {
        
        return (
            <div>
                 <Child01 dataFromParent = {this.state.data} />
            </div>
        );    
    }
}