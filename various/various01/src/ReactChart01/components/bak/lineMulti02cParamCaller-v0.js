import React from "react";
import MyChart from "./lineMulti02cParam"

class lineMulti02cParamCaller extends React.Component {

  //labels={"00:20:00", "00:21:00", "00:22:00", "00:23:00", "00:24:00"}
  //todayData={"10,20,30,40,50"}
  //yesterdayData={"15,25,35,45,55"}
  //lastWeekData={"20,30,40,50,60"}


  
  //<Line data={this.state.dataLine} options={{ responsive: true }} />

  render() {

    const todayData = [10,20,30,40,50]
    const yesterdayData = [15,25,35,45,55]
    const lastWeekData = [20,30,40,50,60]
    const labels = ["00:20:00", "00:21:00", "00:22:00", "00:23:00", "00:24:00"]

    return (
      <div>
        <MyChart labels={labels} todayData={todayData} yesterdayData={yesterdayData} lastWeekData={lastWeekData} />
      </div>
    );
  }

}

export default lineMulti02cParamCaller;
