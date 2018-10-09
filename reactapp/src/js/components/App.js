import React, { Component } from 'react';
import Variable from './Variable'
import ReactDOM from 'react-dom';
import interact from 'interactjs';


const title = "My Minimal React Webpack Babel R Setup";

const style = {
	width: '500px',
	height: '500px',
	border: '1px',
	bordercolor: 'coral'
}

export default class App extends Component {
	constructor(props) {
		super(props);
	}

	// need to listen for drop events

	onDropHandler = (child1, child2) => {

		// do some stuff in R based on these unique IDs
		console.log(child1, child2);
		

	}

	
	render() {
		return(
			<div style={style}>
				<div>{title}</div>
				<Variable dropHandler={this.onDropHandler} name="Eric Graves" />
				<Variable dropHandler={this.onDropHandler} name="Katie Graves" />
			</div>			
		);
	}
}