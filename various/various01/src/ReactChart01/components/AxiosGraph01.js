//https://www.digitalocean.com/community/tutorials/react-axios-react
import React from 'react';
import axios from 'axios';
import { Line } from "react-chartjs-2"

export default class AxiosGraph01 extends React.Component {
  
  state = {
    persons: [],
    personNames: []
  }

  componentDidMount() {
    axios.get(`https://jsonplaceholder.typicode.com/users`)
      .then(res => {

        // get the whole incoming data - which is an array of jsons
        const personsGotten = res.data;

        // set the state that will hold the whole data
        this.setState({persons: personsGotten})

        // extract values of "name" alone and store in the state
        var pNames = [];
        pNames = this.state.persons.map((item) =>
            pNames.concat(item.name)
        );
        this.setState({personNames: pNames})

        pNames = [] // empty the variable to cleanup

        //console.log("pNames")
        //console.log(pNames)
        //console.log("state personNames")
        //console.log(this.state.personNames)

      });
  }

  render() {

      const labels = this.state.personNames
      
      const data = {
        labels: labels,
        datasets: [
          {
            label: 'My First dataset',
            fill: false,
            lineTension: 0.1,
            backgroundColor: 'rgba(75,192,192,0.4)',
            borderColor: 'rgba(75,192,192,1)',
            borderCapStyle: 'butt',
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: 'miter',
            pointBorderColor: 'rgba(75,192,192,1)',
            pointBackgroundColor: '#fff',
            pointBorderWidth: 1,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: 'rgba(75,192,192,1)',
            pointHoverBorderColor: 'rgba(220,220,220,1)',
            pointHoverBorderWidth: 2,
            pointRadius: 1,
            pointHitRadius: 10,
            data: [65, 59, 80, 81, 56, 55, 40]
          }
        ]
      };

     return (
      <div>
        <h2>Axios Line Example</h2>
        <Line data={data} />
      </div>
    )

    /*
      // data for reference
      const data0 = {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets: [
          {
            label: 'My First dataset',
            fill: false,
            lineTension: 0.1,
            backgroundColor: 'rgba(75,192,192,0.4)',
            borderColor: 'rgba(75,192,192,1)',
            borderCapStyle: 'butt',
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: 'miter',
            pointBorderColor: 'rgba(75,192,192,1)',
            pointBackgroundColor: '#fff',
            pointBorderWidth: 1,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: 'rgba(75,192,192,1)',
            pointHoverBorderColor: 'rgba(220,220,220,1)',
            pointHoverBorderWidth: 2,
            pointRadius: 1,
            pointHitRadius: 10,
            data: [65, 59, 80, 81, 56, 55, 40]
          }
        ]
      };

    */

  }

}