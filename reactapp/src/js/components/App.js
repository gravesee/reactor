import React, { Component } from 'react';
import List from './List'

const title = "My Minimal React Webpack Babel R Setup";

class App extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return(
			<div>
				<div>{title}</div>
				<List />
			</div>			
		);
	}
}

export default App;