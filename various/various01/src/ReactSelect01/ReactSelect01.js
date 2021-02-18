import React from 'react';
import Select from 'react-select';

export function ReactSelect01() {

    const options = [
        { value: 'chocolate', label: 'Chocolate' },
        { value: 'strawberry', label: 'Strawberry' },
        { value: 'vanilla', label: 'Vanilla' },
    ];

    this.setState(componentState)

    this.state = {
        selectedOption: null,
      };

    const handleChange = selectedOption => {
        this.setState({ selectedOption });
        console.log(`Option selected:`, selectedOption);
    };

    const { selectedOption } = this.state;

    return (
        <Select
          value={selectedOption}
          onChange={this.handleChange}
          options={options}
        />
      );
}
