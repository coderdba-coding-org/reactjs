import React from "react";
import { render } from "react-dom";
import { TimeSeries, Index } from "pondjs";
import {
  Resizable,
  Charts,
  ChartContainer,
  ChartRow,
  YAxis,
  BarChart,
  styler
} from "react-timeseries-charts";

import data from "./data";
import './page.css';

class SimpleChart extends React.Component {
  render() {
    const series = new TimeSeries({
      name: "hilo_rainfall",
      columns: ["index", "precip"],
      points: data.values.map(([d, value]) => [
        Index.getIndexString("1h", new Date(d)),
        value
      ])
    });

    console.log("series is ", series);
    const style = styler([
      {
        key: "precip",
        color: "#A5C8E1",
        selected: "#2CB1CF"
      }
    ]);

    return (
      <Resizable>
        <ChartContainer timeRange={series.range()}>
          <ChartRow height="150">
            <YAxis
              id="rain"
              label="Rainfall (inches/hr)"
              min={0}
              max={2}
              format=".2f"
              width="70"
              type="linear"
            />
            <Charts>
              <BarChart
                axis="rain"
                style={style}
                spacing={1}
                columns={["precip"]}
                series={series}
                minBarHeight={1}
              />
            </Charts>
          </ChartRow>
        </ChartContainer>
      </Resizable>
    );
  }
}

class App extends React.Component {
  state = {};

  render() {
    return (
      <div className="p-3 m-4 border border-muted">
        <SimpleChart />
      </div>
    );
  }
}

render(<App />, document.getElementById("root"));
