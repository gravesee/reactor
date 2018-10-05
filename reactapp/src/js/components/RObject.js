import React, { Component } from 'react';
import '../interact/dragging';

class RObject extends Component {
	render() {
		return <div className="draggable">{this.props.data}</div>;
	}
}

export default RObject;