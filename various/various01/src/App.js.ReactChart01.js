import React from 'react';

import LineExample from './ReactChart01/components/line';
import LineMulti01 from './ReactChart01/components/lineMulti01';
import LineMulti02c from './ReactChart01/components/lineMulti02c';
import LineMulti02cParamCaller from './ReactChart01/components/lineMulti02cParamCaller.js';

export default class App extends React.Component {
	render() {
		return (
			<div>
				<hr />
				<LineExample />
				<LineMulti01 />
				<LineMulti02c />
				<LineMulti02cParamCaller />
			</div>
		);
	}
}
