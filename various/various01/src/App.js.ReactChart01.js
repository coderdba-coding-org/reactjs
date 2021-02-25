import React from 'react';

import LineExample from './ReactChart01/components/line';
import LineMulti01 from './ReactChart01/components/lineMulti01';

export default class App extends React.Component {
	render() {
		return (
			<div>
				<hr />
				<LineExample />
				<LineMulti01 />
			</div>
		);
	}
}
