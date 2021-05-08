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