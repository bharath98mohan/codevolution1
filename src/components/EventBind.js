import React, { Component } from 'react';

class EventBind extends Component {

	constructor() {
		super()
		this.state = {
			message: 'Welcome'
		}
		this.Message=this.Message.bind(this)
	}

	Message = () => {
		this.setState({
			message: 'Goodbye'
		})
	}

	render() {
		return(
			<div>
				<p>{this.state.message}</p>
				<button onClick={this.Message}>Click</button>
			</div>
		);
	}
}

export default EventBind;