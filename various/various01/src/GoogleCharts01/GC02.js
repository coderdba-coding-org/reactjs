//https://react-google-charts.com/data-sources/from-api

//NOTE: This can be converted to usual Component with componentDidMount, componentDidUpdate etc 
//      or with functional components
//      instead of using react-component-component

import React from 'react';
import Component from "react-component-component";
import Chart from "react-google-charts";


export function GC02() {

return(
<Component
  initialState={{ dataLoadingStatus: 'loading', chartData: [] }}
  didMount={async function(component) {
    const response = await fetch(
      'https://api.exchangeratesapi.io/latest?symbols=USD,GBP,CAD',
    )
    const json = await response.json()
    const rateCurrencyNames = Object.keys(json.rates)
    const rateCurrencyValues = Object.values(json.rates)
    const chartData = [['Currency Name', 'Currency Rate']]
    for (let i = 0; i < rateCurrencyNames.length; i += 1) {
      chartData.push([rateCurrencyNames[i], rateCurrencyValues[i]])
    }
    component.setState({
      dataLoadingStatus: 'ready',
      chartData: chartData,
    })
  }}
>
  {component => {
    return component.state.dataLoadingStatus === 'ready' ? (
      <Chart
        chartType="BarChart"
        data={component.state.chartData}
        options={{
          chartArea: {
            width: '50%',
          },
          title: 'EUR Price',
        }}
        rootProps={{ 'data-testid': '1' }}
      />
    ) : (
      <div>Fetching data from API</div>
    )
  }}
</Component>
);

}