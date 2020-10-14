import React from 'react';
import PropTypes from 'prop-types';

// https://reactjs.org/docs/typechecking-with-proptypes.html

class Greeting extends React.Component {
  render() {
    return (
      <h1>Hello, {this.props.name}</h1>
    );
  }
}

Greeting.propTypes = {
  name: PropTypes.string
};

Greeting.defaultProps = {
   name: "my boy"
}

export default Greeting;
