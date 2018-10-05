import React, { Component } from 'react';
import RObject from './RObject';
import { BASE_URL } from '../constants/constants';

console.log(BASE_URL);

class List extends Component {
	constructor(props) {
		super(props);

		this.state = {
			robjects: []
		};

		this.fetchData = this.fetchData.bind(this);
	}

	fetchData() {

		fetch(BASE_URL + 'getRObjects')
			.then(result => {return result.json()})
			.then(data => {
				this.setState({
					robjects: [...this.state.robjects, ...data.response]
				});
			});
	}

	render() {
		return(
			<div>
				<button onClick={this.fetchData}>Fetch R Data</button>
				<ul>
					{this.state.robjects.map((obj => <li> <RObject data={obj}/> </li>))}
				</ul>
			</div>			
		);
	}
}

export default List;