//https://www.digitalocean.com/community/tutorials/react-axios-react
import React from 'react';
import axios from 'axios';

export default class AxiosList01 extends React.Component {
  
  state = {
    persons: []
  }

  componentDidMount() {
    axios.get(`https://jsonplaceholder.typicode.com/users`)
      .then(res => {
        const persons = res.data;
        this.setState({ persons });
      })
  }

  render() {
    return (
      <ul>
        { this.state.persons.map(person => <li>{person.name}</li>)}
      </ul>
    )
  }
}