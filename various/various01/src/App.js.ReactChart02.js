import React from 'react';

//import LineChartFunc from './ReactChart02/LineChart-Func'
import LineChartClass from './ReactChart02/LineChart-Class'


export default class App extends React.Component {
	render() {
		return (
			<div>
			<hr />
            <h1>Class Graph</h1>
			<LineChartClass />
			</div>
		);
	}
}
