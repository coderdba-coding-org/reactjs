import React from 'react';

import AxiosGraph02 from './ReactChart01/components/AxiosGraph02-v00'
import AxiosGraph02Func from './ReactChart01/components/AxiosGraph02-v00-Func'

export default class App extends React.Component {
	render() {
		return (
			<div>
				<hr />
                                <h1>Class Graph</h1>
				<AxiosGraph02 />
                                <h1>Function Graph</h1>
				<AxiosGraph02Func />
			</div>
		);
	}
}
