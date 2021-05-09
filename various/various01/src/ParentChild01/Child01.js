// Parent01/Child01: How to Pass Data between React Components: https://www.pluralsight.com/guides/how-to-pass-data-between-react-components

import React, {Component} from 'react';

export default class Child01 extends React.Component {
    render() {
            
            return (
                <div>
                    Data from parent is:{this.props.dataFromParent}
                </div>
            );
        }
    }