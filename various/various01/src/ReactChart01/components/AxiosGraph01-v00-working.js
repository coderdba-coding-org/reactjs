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
        const personsGotten = res.data;
        //this.setState({ persons });
        this.setState({persons: personsGotten})

        // new code from here
        var pNames = [];

        pNames = this.state.persons.map((item) =>
            pNames = this.state.personNames.concat(item.name)
        );

        console.log(pNames)

        this.setState({personNames: pNames})
        //console.log(this.state.personNames)

        // ---------------- new code up to here

      });

      // https://stackoverflow.com/questions/52961988/mapping-a-json-const-in-react-js
      //original.map(config=>({label:config.id,value:config.desc}))

      // https://stackoverflow.com/questions/57008672/react-how-to-convert-json-object-to-array-and-render-it
      // json to array
      // const arr = []
      // Object.keys(MyObject).forEach(name => arr.push({name: key, value: MyObject[key]}))

      /*
      axios.get(`https://jsonplaceholder.typicode.com/users`)
      .then(res => {
        const persons = res.data;
        const personNames = persons.map(person => {person.name});
        this.setState({ personNames });
      });
      */

  }

  render() {

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


      //const labels = () => {const labelList = this.state.persons.map(person => {person.name})};

      // this works
      //const labels = ["1","2","3","4","5"]
      const labels = this.state.personNames

      // this does not work -- labels gets null value here
      /*
      const labelsAre = []
      const labels = () => {
        console.log(["1","2","3","4","5"])
        const labelsAre = ["1","2","3","4","5"]
        //return (["1","2","3","4","5"])

      }
      */

      // not sure if it really worked, but it did not give syntax error
      //const labels = () => { const x = [] }

      // this gives syntax error
      //const labels = () => { const labels = ["1","2","3","4","5"]; return labels }

      /* THIS WORKS --> but, create a looping function to do this concatentation
      var labels = []
      console.log(labels)

      var newLabels = labels.concat("1")
      labels = newLabels

      console.log(newLabels)
      console.log(labels)

      newLabels = labels.concat("2")
      labels = newLabels

      console.log(newLabels)
      console.log(labels)
      */

      /* THIS KIND OF WORKED - but each subsequent element concatenated the previous
      var labels = []

      //https://javascript.plainenglish.io/how-to-loop-through-arrays-in-react-3eaa8a14445
 
      //this.items = this.state.cart.map((item) =>
      //<li key={item.id}>{item.name}</li>
      //);

      this.state.personNames = this.state.persons.map((item) =>
      
      this.state.personNames = this.state.personNames.concat(item.name)
      );

      console.log(this.state.personNames)

      labels = this.state.personNames
      */
      

      const data = {
        //labels: this.state.persons.map(person => {person.name}),
        // this kind of works - but each label is treated as "object"
        //labels: this.state.persons,
        // this works
        //labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        // this works
        //labels: ["1","2","3","4","5"],
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

      /* This wont work - cannot return a function
      const LineChart = () => (
        <div>
          <h2>Line Example</h2>
          <Line data={data} />
        </div>
      )

      return LineChart
      */

     return (
      <div>
        <h2>Axios Line Example</h2>
        <Line data={data} />
      </div>
    )

  }

  /* Original code
  render() {
    return (
      <ul>
        { this.state.persons.map(person => <li>{person.name}</li>)}
      </ul>
    )
  }
  */
}