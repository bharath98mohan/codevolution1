import React, { Component } from 'react';

class ClassClick extends Component {

	clickFunc() {
		console.log('Clicked the button');
	}

	render() {
		return(
			<div>
				<button onClick={this.clickFunc}>Click me</button>
			</div>
		);
	}
}

export default ClassClick;