// Reference: https://mdbootstrap.com/docs/react/advanced/charts/ 

import React from "react";
import { Line } from "react-chartjs-2";

class lineMulti01 extends React.Component {

  /*
  constructor(props) {

    super(props)

    const labels = this.props.labels
    const todayData = this.props.labels
    const yesterdayData = this.props.labels
    const lastWeekData = this.props.labels
  }
  */

 render() {

 /*
  const labels = this.props.labels
  const todayData = this.props.labels
  const yesterdayData = this.props.labels
  const lastWeekData = this.props.labels
*/

const { chartTitle, labels, todayData, yesterdayData, lastWeekData } = this.props

console.log(labels)
console.log(todayData)

 this.state = {
    dataLine: {
      labels: labels,
      datasets: [
        {
          label: "Today",
          fill: true,
          lineTension: 0.3,
          backgroundColor: "rgba(0, 0, 0, 0)",
          borderColor: "rgb(35, 26, 136)",
          borderCapStyle: "butt",
          borderDash: [],
          borderDashOffset: 0.0,
          borderJoinStyle: "miter",
          pointBorderColor: "rgb(255, 100, 0)",
          pointBackgroundColor: "rgb(255, 255, 255)",
          pointBorderWidth: 10,
          pointHoverRadius: 5,
          pointHoverBackgroundColor: "rgb(0, 0, 0)",
          pointHoverBorderColor: "rgba(220, 220, 220, 1)",
          pointHoverBorderWidth: 2,
          pointRadius: 1,
          pointHitRadius: 10,
          data: todayData
        },
        {
          label: "Yesterday",
          fill: true,
          lineTension: 0.3,
          backgroundColor: "rgba(0, 0, 0, 0)",
          borderColor: "rgb(205, 130, 158)",
          borderCapStyle: "butt",
          borderDash: [],
          borderDashOffset: 0.0,
          borderJoinStyle: "miter",
          pointBorderColor: "rgb(135, 26, 136)",
          pointBackgroundColor: "rgb(255, 255, 255)",
          pointBorderWidth: 10,
          pointHoverRadius: 5,
          pointHoverBackgroundColor: "rgb(0, 0, 0)",
          pointHoverBorderColor: "rgba(220, 220, 220, 1)",
          pointHoverBorderWidth: 2,
          pointRadius: 1,
          pointHitRadius: 10,
          data: yesterdayData
        },
        {
          label: "Last Week",
          fill: true,
          lineTension: 0.3,
          backgroundColor: "rgba(0, 0, 0, 0)",
          borderColor: "rgb(255,100,0)",
          borderCapStyle: "butt",
          borderDash: [],
          borderDashOffset: 0.0,
          borderJoinStyle: "miter",
          pointBorderColor: "rgb(35, 26, 136)",
          pointBackgroundColor: "rgb(255, 255, 255)",
          pointBorderWidth: 10,
          pointHoverRadius: 5,
          pointHoverBackgroundColor: "rgb(0, 0, 0)",
          pointHoverBorderColor: "rgba(220, 220, 220, 1)",
          pointHoverBorderWidth: 2,
          pointRadius: 1,
          pointHitRadius: 10,
          data: lastWeekData
        }
      ]
    }
  };

  //render() {

    return (
      <div>
        <h3 className="mt-5"> {chartTitle} </h3>
        <Line data={this.state.dataLine} options={{ responsive: true }} />
      </div>
    );
  }

}

export default lineMulti01;
