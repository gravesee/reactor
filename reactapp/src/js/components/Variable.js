import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import interact from 'interactjs';

export default class Variable extends Component {
	constructor(props) {
		super(props);
	}

	dragMoveListener = (event) => {
		event.preventDefault();
		var target = event.target,
        // keep the dragged position in the data-x/data-y attributes
        x = (parseFloat(target.getAttribute('data-x')) || 0) + event.dx,
        y = (parseFloat(target.getAttribute('data-y')) || 0) + event.dy;

	    // translate the element
	    target.style.webkitTransform =
	    target.style.transform =
	      'translate(' + x + 'px, ' + y + 'px)';

	    // update the posiion attributes
	    target.setAttribute('data-x', x);
	    target.setAttribute('data-y', y);

	}

	onDropListener = (event) => {

		this.props.dropHandler(event.relatedTarget.getAttribute("name"), this.props.name);

	}

	componentDidMount() {
		console.log(this.myRef);

		var el = ReactDOM.findDOMNode(this);

		interact(el)
			.draggable({
			    
			    // call this function on every dragmove event
			    onmove: this.dragMoveListener,
			    // call this function on every dragend event
			    
  			})
  			.dropzone({
			    // enable inertial throwing
			    ondrop: this.onDropListener
			    	
			 });

	}

	render() {
		return(
			<div name={this.props.name}>{this.props.name}</div>
		);
	}
}

