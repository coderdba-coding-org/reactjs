import React from 'react';

import LineExample from './ReactChart01/components/line';
import LineMulti01 from './ReactChart01/components/lineMulti01';
import LineMulti02c from './ReactChart01/components/lineMulti02c';
import LineMulti02cParamCaller from './ReactChart01/components/lineMulti02cParamCaller.js';
import AxiosList01 from './ReactChart01/components/AxiosList01'
import AxiosGraph01 from './ReactChart01/components/AxiosGraph01'
import AxiosFunction01 from './Axios01/AxiosFunction01'

export default class App extends React.Component {
	render() {
		return (
			<div>
				<hr />
				<LineExample />
				<LineMulti01 />
				<LineMulti02c />
				<LineMulti02cParamCaller />
				<AxiosGraph01 />
				<AxiosFunction01 />
			</div>
		);
	}
}
